import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import { PUBLIC_BASE } from "../../lib/photosBase";

const BUCKET = "images";

type Row = { name: string; h: string };

export default function Photos() {
  // セッション内で順序が安定するように seed を固定
  const seed = useMemo(() => crypto.randomUUID(), []);
  const [rows, setRows] = useState<Row[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const fetchPage = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    const { data, error } = await supabase.rpc("storage_random_objects", {
      _bucket: BUCKET,
      _seed: seed,
      _after: cursor,
      _limit: 100,
    });

    if (error) {
      console.error("[photos] rpc error:", error);
      setLoading(false);
      return;
    }

    const list = (data ?? []) as Row[];
    setRows(prev => [...prev, ...list]);
    if (list.length < 100) setHasMore(false);
    if (list.length) setCursor(list[list.length - 1].h);
    setLoading(false);
  };

  useEffect(() => {
    fetchPage(); // 初回

    // 無限スクロール
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) fetchPage();
    }, { rootMargin: "200px" });

    if (sentinelRef.current) io.observe(sentinelRef.current);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Public バケットなら直URLでOK / Privateなら createSignedUrl を使う
  const urlFromName = (name: string) => `${PUBLIC_BASE}/${name}`;
  // 例: Private のとき
  // const getSignedUrl = async (name: string) => {
  //   const { data, error } = await supabase.storage.from(BUCKET).createSignedUrl(name, 3600);
  //   if (error) throw error;
  //   return data.signedUrl;
  // };

  return (
    <main className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <div className="w-full max-w-screen-xl mx-auto">
        <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">← ホームへ戻る</Link>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center items-start">
          {rows.map((r) => (
            <img
              key={r.name}
              src={urlFromName(r.name)}     // WebPのみ
              alt={r.name}
              loading="lazy"
              decoding="async"
              className="h-48 md:h-56 lg:h-64 w-auto max-w-full object-contain rounded-lg"
            />
          ))}
        </div>

        <div ref={sentinelRef} className="h-10 flex items-center justify-center">
          {loading && <span className="text-gray-500">Loading…</span>}
          {!hasMore && <span className="text-gray-400">No more</span>}
        </div>
      </div>
    </main>
  );
}
