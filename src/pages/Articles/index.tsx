import { Link } from "react-router-dom";

const articleGenres = [
	{
		id: "tech",
		name: "Technology",
		description: "技術・プログラミング関連の記事",
		icon: "💻",
		articleCount: 2
	},
	{
		id: "cars",
		name: "Cars",
		description: "車・自動車関連の記事",
		icon: "🚗",
		articleCount: 1
	},
	{
		id: "photography",
		name: "Photography",
		description: "写真・撮影技術の記事",
		icon: "📸",
		articleCount: 0
	}
];

export default function ArticlesIndex() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-start p-6 bg-gray-100">
			<h1 className="text-3xl font-bold mb-6">Articles</h1>
			<p className="text-gray-700 mb-8">ジャンル別に記事を整理しています</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
				{articleGenres.map((genre) => (
					<Link
						key={genre.id}
						to={`/articles/topics/${genre.id}`}
						className="rounded-2xl shadow-md bg-white p-6 hover:shadow-xl transition outline outline-1 outline-gray-200"
					>
						<div className="flex items-center justify-between mb-4">
							<div className="text-4xl">{genre.icon}</div>
							<span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
								{genre.articleCount} articles
							</span>
						</div>
						<h2 className="text-xl font-semibold mb-2">{genre.name}</h2>
						<p className="text-gray-600">{genre.description}</p>
					</Link>
				))}
			</div>
		</main>
	);
}
