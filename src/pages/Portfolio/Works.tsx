import { Link } from "react-router-dom";

const worksData = [
	{
		title: "Sample Portfolio Site",
		year: 2024,
		description: "React と Three.js を用いた個人サイト。3Dモデルの閲覧、記事、写真ギャラリーを実装。",
		techs: ["React", "TypeScript", "Vite", "Tailwind CSS", "Three.js"],
		links: [{ label: "GitHub", href: "https://github.com/yourusername/sample-portfolio" }]
	},
	{
		title: "Image Classifier",
		year: 2023,
		description: "画像分類モデルの実験とデモアプリ。",
		techs: ["Python"],
		links: [{ label: "GitHub", href: "https://github.com/yourusername/image-classifier" }]
	},
];

export function WorksSection() {
	return (
		<div className="bg-white rounded-2xl shadow-md p-8" id="works">
			<header className="text-center mb-8">
				<h1 className="text-3xl font-bold mb-2">Works</h1>
				<p className="text-gray-600">最近の作品・成果物（まだサイト製作段階のサンプル情報です．あとからしっかり更新します．）</p>
			</header>

			<div className="space-y-6">
				{worksData.map((work) => (
					<div key={work.title} className="p-6 rounded-xl border border-gray-200 shadow-sm bg-white">
						<div className="flex items-start justify-between gap-4">
							<div>
								<h2 className="text-xl font-semibold text-gray-900">{work.title}</h2>
								<p className="text-gray-600 mt-1">{work.description}</p>
								<div className="mt-3 flex flex-wrap gap-2">
									{work.techs.map((t) => (
										<span key={t} className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700 border border-gray-200">{t}</span>
									))}
								</div>
							</div>
							<div className="shrink-0">
								<span className="inline-block px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">{work.year}</span>
							</div>
						</div>
						{work.links?.length ? (
							<div className="mt-4 flex flex-wrap gap-3">
								{work.links.map((l) => (
									<a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
										{l.label}
									</a>
								))}
							</div>
						) : null}
					</div>
				))}
			</div>
		</div>
	);
}

export default function Works() {
	return (
		<main className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
			<div className="w-full max-w-4xl">
				<Link to="/portfolio" className="text-blue-600 hover:underline mb-4 inline-block">
					← ポートフォリオ一覧に戻る
				</Link>
				<WorksSection />
			</div>
		</main>
	);
}
