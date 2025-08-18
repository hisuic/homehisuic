import { Link } from "react-router-dom";

const portfolioItems = [
	{
		id: "about-me",
		title: "About Me",
		description: "自己紹介や経歴について",
		icon: "👤",
		category: "Profile"
	},
	{
		id: "skills",
		title: "Skills",
		description: "技術スキルと経験について",
		icon: "🛠️",
		category: "Skills"
	},
	{
		id: "contact",
		title: "Contact",
		description: "お問い合わせ方法",
		icon: "📧",
		category: "Contact"
	}
];

export default function PortfolioIndex() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-start p-6 bg-gray-100">
			<h1 className="text-3xl font-bold mb-6">Portfolio</h1>
			<p className="text-gray-700 mb-8">作品やスキルについて詳しく紹介します（現段階で作成されているものは作成時のサンプル情報なので全部嘘です．あとからしっかり更新します．）</p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
				{portfolioItems.map((item) => (
					<Link
						key={item.id}
						to={`/portfolio/${item.id}`}
						className="rounded-2xl shadow-md bg-white p-6 hover:shadow-xl transition outline outline-1 outline-gray-200"
					>
						<div className="text-4xl mb-4">{item.icon}</div>
						<h2 className="text-xl font-semibold mb-2">{item.title}</h2>
						<p className="text-gray-600 mb-3">{item.description}</p>
						<span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
							{item.category}
						</span>
					</Link>
				))}
			</div>

			<div className="mt-12 w-full max-w-4xl">
				<h2 className="text-2xl font-bold mb-6 text-center">最近の作品</h2>
				<div className="bg-white rounded-2xl shadow-md p-6">
					<p className="text-gray-600 text-center">
						作品一覧をつける
					</p>
				</div>
			</div>
		</main>
	);
}
