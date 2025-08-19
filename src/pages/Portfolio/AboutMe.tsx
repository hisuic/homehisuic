import { Link } from "react-router-dom";

export function AboutMeSection() {
	return (
		<div className="bg-white rounded-2xl shadow-md p-8" id="about-me">
			<header className="text-center mb-8">
				<div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
					👤
				</div>
				<h1 className="text-3xl font-bold mb-2">About Me</h1>
				<p className="text-gray-600">エンジニアとしての成長と挑戦</p>
			</header>
			<div className="prose prose-lg max-w-none">
				<h2>自己紹介</h2>
				<p>こんにちは！私は技術に情熱を持つエンジニアです。新しい技術を学ぶことが大好きで、常に自己成長を心がけています。</p>
				<h2>経歴</h2>
				<div className="space-y-4">
					<div className="border-l-4 border-blue-500 pl-4">
						<h3 className="font-semibold">2024年 - 現在</h3>
						<p>フリーランスエンジニアとして活動中</p>
					</div>
					<div className="border-l-4 border-green-500 pl-4">
						<h3 className="font-semibold">2020年 - 2023年</h3>
						<p>スタートアップ企業でフルスタック開発</p>
					</div>
					<div className="border-l-4 border-purple-500 pl-4">
						<h3 className="font-semibold">2016年 - 2020年</h3>
						<p>大学でコンピュータサイエンスを専攻</p>
					</div>
				</div>
				<h2>興味・関心</h2>
				<ul>
					<li>機械学習・AI技術</li>
					<li>Web開発（フロントエンド・バックエンド）</li>
					<li>3Dモデリング・CG技術</li>
					<li>写真撮影・画像処理</li>
					<li>新しい技術の学習と実践</li>
				</ul>
				<h2>趣味</h2>
				<p>技術以外にも、写真撮影、車、旅行など様々な趣味があります。これらの経験が技術的な発想や問題解決に活かされていると感じています。</p>
				<h2>今後の目標</h2>
				<p>技術の進歩に合わせて常に学習を続け、より良いプロダクトを作り上げることを目指しています。また、技術的な知見を共有し、他の開発者の成長にも貢献したいと考えています。</p>
			</div>
		</div>
	);
}

export default function AboutMe() {
	return (
		<main className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
			<div className="w-full max-w-4xl">
				<Link to="/portfolio" className="text-blue-600 hover:underline mb-4 inline-block">
					← ポートフォリオ一覧に戻る
				</Link>
				
				<AboutMeSection />
			</div>
		</main>
	);
} 