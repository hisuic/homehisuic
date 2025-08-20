import { Link } from "react-router-dom";
import "dotenv/config";

// export default function PhotosPage() {
//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
//       <div className="rounded-2xl shadow-md bg-white p-8 text-center">
//         <h1 className="text-2xl font-bold mb-4">Photos</h1>
//         <p className="text-gray-600 mb-6">写真ギャラリーは準備中です。</p>
//         <Link to="/" className="text-blue-600 hover:underline">ホームへ戻る</Link>
//       </div>
//     </main>
//   );
// }

const PUBLIC_BASE = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/${import.meta.env.VITE_SUPABASE_BUCKET}`;

export function PhotosSection({ basePath, alt }: { basePath: string; alt: string }) {
  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`${PUBLIC_BASE}/${basePath}-640.avif 640w, ${PUBLIC_BASE}/${basePath}-1600.avif 1600w`}
      />
      <img
        src={`${PUBLIC_BASE}/${basePath}-640.jpg`}
        srcSet={`${PUBLIC_BASE}/${basePath}-640.jpg 640w, ${PUBLIC_BASE}/${basePath}-1600.jpg 1600w`}
        sizes="(max-width: 640px) 100vw, 60vw"
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{ width: "100%", height: "auto" }}
      />
    </picture>
  );
}

export default function Photos() {
	return (
		<main className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
			<div className="w-full max-w-4xl">
				<Link to="/photos" className="text-blue-600 hover:underline mb-4 inline-block">
					← ポートフォリオ一覧に戻る
				</Link>
				
				<PhotosSection />
			</div>
		</main>
	);
} 
