import { Link } from "react-router-dom";

export default function PhotosPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <div className="rounded-2xl shadow-md bg-white p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Photos</h1>
        <p className="text-gray-600 mb-6">写真ギャラリーは準備中です。</p>
        <Link to="/" className="text-blue-600 hover:underline">ホームへ戻る</Link>
      </div>
    </main>
  );
}
