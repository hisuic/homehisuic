// src/pages/Home.tsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">My Gallery</h1>
      <p className="text-lg text-gray-700 mb-12">
        趣味や作品をまとめたポートフォリオサイトです。
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        <Link
          to="/photos"
          className="rounded-2xl shadow-md bg-white p-6 hover:shadow-xl transition"
        >
          <h2 className="text-xl font-semibold mb-2">📷 Photos</h2>
          <p className="text-gray-600">カテゴリーごとに撮影した写真を見る</p>
        </Link>

        <Link
          to="/models"
          className="rounded-2xl shadow-md bg-white p-6 hover:shadow-xl transition"
        >
          <h2 className="text-xl font-semibold mb-2">🖼 3D Models</h2>
          <p className="text-gray-600">
            撮影した点群データから作成した3Dモデルを回転して閲覧
          </p>
        </Link>

        <Link
          to="/articles"
          className="rounded-2xl shadow-md bg-white p-6 hover:shadow-xl transition"
        >
          <h2 className="text-xl font-semibold mb-2">📝 Articles</h2>
          <p className="text-gray-600">Zennなどで書いた技術記事のまとめ</p>
        </Link>

        <Link
          to="/portfolio"
          className="rounded-2xl shadow-md bg-white p-6 hover:shadow-xl transition"
        >
          <h2 className="text-xl font-semibold mb-2">👤 Portfolio</h2>
          <p className="text-gray-600">自己紹介・スキル・作品の詳細</p>
        </Link>
      </div>
    </main>
  );
}
