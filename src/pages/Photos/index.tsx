import { Link } from "react-router-dom";
import { PUBLIC_BASE } from "../../lib/photosBase";

function Photo({ basePath, alt }: { basePath: string; alt: string }) {
  const avif = `${PUBLIC_BASE}/${basePath}-640.avif 640w, ${PUBLIC_BASE}/${basePath}-1600.avif 1600w`;
  const jpg  = `${PUBLIC_BASE}/${basePath}-640.jpg 640w, ${PUBLIC_BASE}/${basePath}-1600.jpg 1600w`;

  return (
    <picture className="block">
      <source type="image/avif" srcSet={avif} />
      <img
        src={`${PUBLIC_BASE}/${basePath}-640.jpg`}
        srcSet={jpg}
        // 列数に合わせた概算。画像幅の最適選択用（潰れ対策とは無関係）
        sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
        alt={alt}
        loading="lazy"
        decoding="async"
        // 高さだけ指定／幅は自動。縦写真は左右に余白が出てもOK
        className="h-48 md:h-56 lg:h-64 w-auto max-w-full object-contain rounded-lg"
      />
    </picture>
  );
}

export default function Photos() {
  const items = [
    { basePath: "IMG_6843", alt: "Sample 1" },
    { basePath: "IMG_6844", alt: "Sample 2" },
    { basePath: "IMG_6848", alt: "Sample 3" },
    { basePath: "IMG_6944", alt: "Sample 4" },
    { basePath: "IMG_6846", alt: "Sample 5" },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <div className="w-full max-w-screen-xl mx-auto">
        <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">← ホームへ戻る</Link>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center items-start">
          {items.map((it) => (
            <Photo key={it.basePath} basePath={it.basePath} alt={it.alt} />
          ))}
        </div>
      </div>
    </main>
  );
}
