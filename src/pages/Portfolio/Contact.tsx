import { Link } from "react-router-dom";

export function ContactSection() {
	return (
		<div className="bg-white rounded-2xl shadow-md p-8" id="contact">
			<header className="text-center mb-8">
				<h1 className="text-3xl font-bold mb-2">Contact</h1>
				<p className="text-gray-600">お問い合わせ・ご連絡</p>
			</header>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<h2 className="text-xl font-semibold mb-4">連絡方法</h2>
					<div className="space-y-4">
						<div className="flex items-center space-x-3">
							<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
								📧
							</div>
							<div>
								<h3 className="font-medium">Email</h3>
								<p className="text-gray-600">contact@example.com</p>
							</div>
						</div>
						
						<div className="flex items-center space-x-3">
							<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
								💼
							</div>
							<div>
								<h3 className="font-medium">LinkedIn</h3>
								<a 
									href="https://linkedin.com/in/yourprofile" 
									target="_blank" 
									rel="noopener noreferrer"
									className="text-blue-600 hover:underline"
								>
									linkedin.com/in/yourprofile
								</a>
							</div>
						</div>
						
						<div className="flex items-center space-x-3">
							<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
								🐙
							</div>
							<div>
								<h3 className="font-medium">GitHub</h3>
								<a 
									href="https://github.com/yourusername" 
									target="_blank" 
									rel="noopener noreferrer"
									className="text-gray-600 hover:underline"
								>
									github.com/yourusername
								</a>
							</div>
						</div>
						
						<div className="flex items-center space-x-3">
							<div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
								📝
							</div>
							<div>
								<h3 className="font-medium">Zenn</h3>
								<a 
									href="https://zenn.dev/yourusername" 
									target="_blank" 
									rel="noopener noreferrer"
									className="text-purple-600 hover:underline"
								>
									zenn.dev/yourusername
								</a>
							</div>
						</div>
					</div>
				</div>
				
				<div>
					<h2 className="text-xl font-semibold mb-4">対応可能な案件</h2>
					<div className="space-y-3">
						<div className="p-3 bg-blue-50 rounded-lg">
							<h3 className="font-medium text-blue-800">Web開発</h3>
							<p className="text-sm text-blue-600">フロントエンド・バックエンド開発</p>
						</div>
						<div className="p-3 bg-green-50 rounded-lg">
							<h3 className="font-medium text-green-800">機械学習</h3>
							<p className="text-sm text-green-600">データ分析・AIモデル開発</p>
						</div>
						<div className="p-3 bg-purple-50 rounded-lg">
							<h3 className="font-medium text-purple-800">3D・CG</h3>
							<p className="text-sm text-purple-600">3Dモデリング・画像処理</p>
						</div>
						<div className="p-3 bg-orange-50 rounded-lg">
							<h3 className="font-medium text-orange-800">技術相談</h3>
							<p className="text-sm text-orange-600">アーキテクチャ・技術選定</p>
						</div>
					</div>
				</div>
			</div>
			
			<div className="mt-8 p-6 bg-gray-50 rounded-lg">
				<h3 className="text-lg font-semibold mb-3">お問い合わせについて</h3>
				<p className="text-gray-600 mb-3">
					フリーランス案件、技術相談、共同開発のご提案など、お気軽にお問い合わせください。
					通常24時間以内にご返信いたします。
				</p>
				<p className="text-sm text-gray-500">
					※ スパムや営業目的のメールはお断りしております。
				</p>
			</div>
		</div>
	);
}

export default function Contact() {
	return (
		<main className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
			<div className="w-full max-w-4xl">
				<Link to="/portfolio" className="text-blue-600 hover:underline mb-4 inline-block">
					← ポートフォリオ一覧に戻る
				</Link>
				
				<ContactSection />
			</div>
		</main>
	);
} 