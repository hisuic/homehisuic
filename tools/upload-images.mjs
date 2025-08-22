import "dotenv/config";
import path from "node:path";
import fs from "node:fs/promises";
import fg from "fast-glob";
import { createClient } from "@supabase/supabase-js";

const { VITE_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, VITE_SUPABASE_BUCKET } = process.env;
if (!VITE_SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !VITE_SUPABASE_BUCKET) {
  console.error("Missing env: VITE_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY / VITE_SUPABASE_BUCKET");
  process.exit(1);
}

const supabase = createClient(VITE_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const LOCAL_DIR = "dist-images";
const files = await fg(`${LOCAL_DIR}/**/*.webp`, { dot:false, caseSensitiveMatch: false });

for (const localPath of files) {
  const relPath = path.relative(LOCAL_DIR, localPath).replaceAll("\\", "/");
  const storagePath = relPath;

  const { data: stat, error: statErr } = await supabase
    .storage.from(VITE_SUPABASE_BUCKET)
    .list(path.dirname(storagePath) === "." ? "" : path.dirname(storagePath), { search: path.basename(storagePath) });

  if (!statErr && stat?.some(f => f.name === path.basename(storagePath))) {
    console.log("skip (exists):", storagePath);
    continue;
  }

  const buf = await fs.readFile(localPath);
  const contentType = "image/webp";

  const { error } = await supabase
    .storage.from(VITE_SUPABASE_BUCKET)
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
