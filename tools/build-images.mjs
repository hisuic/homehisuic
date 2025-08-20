import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import fg from "fast-glob";

const INPUT_DIR  = process.env.PHOTOS_INPUT_DIR  || "originals";
const OUTPUT_DIR = process.env.PHOTOS_OUTPUT_DIR || "dist-images";
const SIZES = [640, 1600];
const Q = { avif: 50, jpeg: 78 };

// 大小どちらも拾う & caseSensitiveMatch: false
const GLOB = `${INPUT_DIR}/**/*.{jpg,jpeg,png,tif,tiff,webp,avif,JPG,JPEG,PNG,TIF,TIFF,WEBP,AVIF}`;

await fs.mkdir(OUTPUT_DIR, { recursive: true });

const files = await fg(GLOB, { dot: false, caseSensitiveMatch: false });
console.log(`[build-images] sources found: ${files.length} under "${INPUT_DIR}"`);
if (files.length === 0) {
  console.error(`[build-images] No images matched. Check INPUT_DIR and extensions.`);
  process.exit(1);
}

const exists = async (p) => fs.access(p).then(() => true).catch(() => false);

for (const inPath of files) {
  const base = path.parse(inPath).name; // 拡張子なし
  const relDir = path.relative(INPUT_DIR, path.dirname(inPath));
  const outDir = path.join(OUTPUT_DIR, relDir);
  await fs.mkdir(outDir, { recursive: true });

  for (const width of SIZES) {
    const outAvif = path.join(outDir, `${base}-${width}.avif`);
    const outJpg  = path.join(outDir, `${base}-${width}.jpg`);
    if (await exists(outAvif) && await exists(outJpg)) {
      console.log("skip (built):", path.join(relDir, `${base}-${width}`));
      continue;
    }

    const img = sharp(inPath, { failOn: "none" })
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .withMetadata({ icc: "sRGB" });

    if (!(await exists(outAvif))) {
      await img.avif({ quality: Q.avif, effort: 4, chromaSubsampling: "4:2:0" }).toFile(outAvif);
      console.log("built:", path.join(relDir, `${base}-${width}.avif`));
    }
    if (!(await exists(outJpg))) {
      await img.jpeg({ quality: Q.jpeg, progressive: true, mozjpeg: true }).toFile(outJpg);
      console.log("built:", path.join(relDir, `${base}-${width}.jpg`));
    }
  }
}
console.log("[build-images] done ->", OUTPUT_DIR);
