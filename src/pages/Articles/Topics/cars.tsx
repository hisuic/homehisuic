import { Link } from "react-router-dom";

const carArticles = [
	{
		id: "car-photography-tips",
		title: "車の写真撮影のコツ",
		description: "車を美しく撮影するためのテクニックとポイント",
		date: "2024-03-10",
		tags: ["車", "写真", "撮影技術"],
		readTime: "8分"
	}
];

export default function CarsTopic() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-start p-6 bg-gray-100">
			<div className="w-full max-w-4xl">
				<Link to="/articles" className="text-blue-600 hover:underline mb-4 inline-block">
					← 記事一覧に戻る
				</Link>
				
				<header className="text-center mb-8">
					<div className="text-6xl mb-4">🚗</div>
					<h1 className="text-3xl font-bold mb-2">Cars</h1>
					<p className="text-gray-600">車・自動車関連の記事</p>
				</header>

				<div className="space-y-4">
					{carArticles.map((article) => (
						<Link
							key={article.id}
							to={`/articles/${article.id}`}
							className="block bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
						>
							<div className="flex items-start justify-between">
								<div className="flex-1">
									<h2 className="text-xl font-semibold mb-2">{article.title}</h2>
									<p className="text-gray-600 mb-3">{article.description}</p>
									<div className="flex items-center gap-4 text-sm text-gray-500">
										<span>{article.date}</span>
										<span>•</span>
										<span>{article.readTime}</span>
									</div>
								</div>
								<div className="flex gap-2 ml-4">
									{article.tags.map((tag) => (
										<span
											key={tag}
											className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</Link>
					))}
				</div>

				{carArticles.length === 0 && (
					<div className="text-center py-12">
						<p className="text-gray-500">まだ記事がありません。</p>
					</div>
				)}
			</div>
		</main>
	);
}
