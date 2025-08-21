import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import fg from "fast-glob";

const INPUT_DIR  = process.env.PHOTOS_INPUT_DIR  || "originals";
const OUTPUT_DIR = process.env.PHOTOS_OUTPUT_DIR || "dist-images";

const HEIGHT = 500;                 // ← 縦幅固定（px）
const Q = { webp: 80 };             // ← WebP の品質だけに

// 大小どちらも拾う & caseSensitiveMatch: false
const GLOB = `${INPUT_DIR}/**/*.{jpg,jpeg,png,tif,tiff,webp,avif,JPG,JPEG,PNG,TIF,TIFF,WEBP,AVIF}`;

await fs.mkdir(OUTPUT_DIR, { recursive: true });

const files = await fg(GLOB, { dot: false, caseSensitiveMatch: false });
console.log(`[build-images] sources found: ${files.length} under "${INPUT_DIR}"`);
if (files.length === 0) {
  console.error(`[build-images] No images matched. Check INPUT_DIR and extensions.`);
  process.exit(1);
}

const exists = async (p: string) => fs.access(p).then(() => true).catch(() => false);

for (const inPath of files) {
  const base = path.parse(inPath).name; // 拡張子なし
  const relDir = path.relative(INPUT_DIR, path.dirname(inPath));
  const outDir = path.join(OUTPUT_DIR, relDir);
  await fs.mkdir(outDir, { recursive: true });

  // 出力は WebP 1種類（高さ500px固定）
  const outWebp = path.join(outDir, `${base}-h${HEIGHT}.webp`);
  if (await exists(outWebp)) {
    console.log("skip (built):", path.join(relDir, `${base}-h${HEIGHT}.webp`));
    continue;
  }

  const img = sharp(inPath, { failOn: "none" })
    .rotate()
    .resize({ height: HEIGHT, withoutEnlargement: true }) // ← 縦固定＆拡大しない
    .withMetadata({ icc: "sRGB" });

  await img.webp({ quality: Q.webp, effort: 4 }).toFile(outWebp);
  console.log("built:", path.join(relDir, `${base}-h${HEIGHT}.webp`));
}

console.log("[build-images] done ->", OUTPUT_DIR);
