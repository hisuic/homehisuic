import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import fg from "fast-glob";

const INPUT_DIR = "originals";      // 元画像置き場
const OUTPUT_DIR = "dist-images";   // 変換結果

// 今回の要件
const SIZES = [640, 1600];
const Q = { avif: 50, jpeg: 78 };

await fs.mkdir(OUTPUT_DIR, { recursive: true });

// 対象拡張子
const files = await fg(`${INPUT_DIR}/**/*.{jpg,jpeg,png,tif,tiff,webp,avif}`, { dot:false });

for (const inPath of files) {
  const base = path.parse(inPath).name;               // 拡張子なし
  const relDir = path.relative(INPUT_DIR, path.dirname(inPath)); // サブフォルダ保持
  const outDir = path.join(OUTPUT_DIR, relDir);
  await fs.mkdir(outDir, { recursive: true });

  for (const width of SIZES) {
    const img = sharp(inPath, { failOn: "none" })
      .rotate()                        // EXIFの向きを適用
      .resize({ width, withoutEnlargement: true })
      .withMetadata({ icc: "sRGB" });  // ICCはsRGBに

    // AVIF
    await img
      .avif({ quality: Q.avif, effort: 4, chromaSubsampling: "4:2:0" })
      .toFile(path.join(outDir, `${base}-${width}.avif`));

    // JPEG（フォールバック）
    await img
      .jpeg({ quality: Q.jpeg, progressive: true, mozjpeg: true })
      .toFile(path.join(outDir, `${base}-${width}.jpg`));
  }
}

console.log("Image build done.");
