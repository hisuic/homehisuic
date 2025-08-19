import { Link } from "react-router-dom";

export function AboutMeSection() {
	return (
		<div className="bg-white rounded-2xl shadow-md p-8" id="about-me">
			<header className="text-center mb-8">
				{/* <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl"> */}
				{/* 	👤 */}
				{/* </div> */}
				<h1 className="text-3xl font-bold mb-2">About Me</h1>
				{/* <p className="text-gray-600">私の情報</p> */}
			</header>
			<div className="prose prose-lg max-w-none">
				<h2>自己紹介</h2>
				<p>2003年生まれ，大学では情報学を専攻しています．</p>
				<h2>経歴</h2>
				<div className="space-y-4">
					<div className="border-l-4 border-blue-500 pl-4">
						<h3 className="font-semibold">2019 - 2023</h3>
						<p>高校 機械加工を専攻</p>
					</div>
					<div className="border-l-4 border-purple-500 pl-4">
						<h3 className="font-semibold">2023 - 現在</h3>
						<p>大学で情報学を専攻</p>
					</div>
				</div>
				<h2>興味・関心</h2>
				<ul>
                    <li>情報セキュリティ</li>
					<li>機械学習・AI技術</li>
					<li>Web開発（フロントエンド・バックエンド）</li>
				</ul>
				<h2>趣味</h2>
				<p>写真撮影(自然，都会，車)，旅行，絵画，車 など</p>
				{/* <h2>項目</h2> */}
				{/* <p>内容</p> */}
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
