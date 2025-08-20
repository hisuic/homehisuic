import { Link } from "react-router-dom";
import { PUBLIC_BASE } from "../../lib/photosBase";

function PhotosSection({ basePath, alt }: { basePath: string; alt: string }) {
  const avif = `${PUBLIC_BASE}/${basePath}-640.avif 640w, ${PUBLIC_BASE}/${basePath}-1600.avif 1600w`;
  const jpg  = `${PUBLIC_BASE}/${basePath}-640.jpg 640w, ${PUBLIC_BASE}/${basePath}-1600.jpg 1600w`;
  return (
    <picture>
      <source type="image/avif" srcSet={avif} />
      <img
        src={`${PUBLIC_BASE}/${basePath}-640.jpg`}
        srcSet={jpg}
        sizes="(max-width: 640px) 100vw, 60vw"
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-auto"
      />
    </picture>
  );
}

export default function Photos() {
  return (
    <main className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <div className="w-full max-w-4xl">
        <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">← ホームへ戻る</Link>

        <PhotosSection basePath="IMG_6843" alt="Sample" />
      </div>
    </main>
  );
}
