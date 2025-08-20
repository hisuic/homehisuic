import "dotenv/config";
import path from "node:path";
import fs from "node:fs/promises";
import fg from "fast-glob";
import { createClient } from "@supabase/supabase-js";

const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, SUPABASE_BUCKET } = process.env;
if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !SUPABASE_BUCKET) {
  console.error("Missing env: SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY / SUPABASE_BUCKET");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

// dist-images 以下のファイルを全部アップロード
const LOCAL_DIR = "dist-images";
const files = await fg(`${LOCAL_DIR}/**/*.{avif,jpg}`, { dot:false });

for (const localPath of files) {
  const relPath = path.relative(LOCAL_DIR, localPath).replaceAll("\\", "/");
  // バケット内のパスはそのまま使う: 例) {subdir}/basename-640.avif
  const storagePath = relPath;

  // すでに存在するならスキップ（idempotent運用）
  const { data: stat, error: statErr } = await supabase
    .storage.from(SUPABASE_BUCKET)
    .list(path.dirname(storagePath) === "." ? "" : path.dirname(storagePath), { search: path.basename(storagePath) });

  if (!statErr && stat?.some(f => f.name === path.basename(storagePath))) {
    console.log("skip (exists):", storagePath);
    continue;
  }

  const buf = await fs.readFile(localPath);
  const contentType = localPath.endsWith(".avif") ? "image/avif" : "image/jpeg";

  const { error } = await supabase
    .storage.from(SUPABASE_BUCKET)
    .upload(storagePath, buf, {
      contentType,
      cacheControl: "public, max-age=31536000, immutable",
      upsert: false,
    });

  if (error) {
    console.error("upload error:", storagePath, error.message);
  } else {
    console.log("uploaded:", storagePath);
  }
}

console.log("Upload done.");
