import { Link } from "react-router-dom";

const skillCategories = [
	{
		category: "プログラミング言語",
		skills: [
			{ name: "C", level: "個人で日常的に使用", color: "bg-blue-600" },
			{ name: "Python", level: "実務経験あり.個人でも日常的に使用", color: "bg-blue-500" },
			{ name: "Java", level: "基礎理解", color: "bg-orange-500" },
			{ name: "TypeScript", level: "個人で使用経験あり．まだ理解は浅い", color: "bg-yellow-500" },
			{ name: "Rust", level: "基礎理解．学習中", color: "bg-orange-500" },
		]
	},
	{
		category: "ツール・インフラ",
		skills: [
			{ name: "Git, GitHub", level: "実務経験あり, 個人でも日常的に使用", color: "bg-orange-600" },
			{ name: "Linux", level: "実務経験あり, 個人でも日常的に使用", color: "bg-yellow-600" },
			{ name: "Docker", level: "実務経験はあるがまだ理解が浅い", color: "bg-blue-500" }
		]
	}
];

export function SkillsSection() {
	return (
		<div className="bg-white rounded-2xl shadow-md p-8" id="skills">
			<header className="text-center mb-8">
				<h1 className="text-3xl font-bold mb-2">Skills</h1>
				<p className="text-gray-600">技術スキルと経験レベル</p>
			</header>
			<div className="space-y-8">
				{skillCategories.map((category) => (
					<div key={category.category}>
						<h2 className="text-xl font-semibold mb-4 text-gray-800">
							{category.category}
						</h2>
						<div className="space-y-3">
							{category.skills.map((skill) => (
								<div key={skill.name} className="space-y-2">
									<div className="flex justify-between items-center">
										<span className="font-medium text-gray-700">{skill.name}</span>
                                        <span> : </span>
										<span className="text-sm text-gray-500">{skill.level}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default function Skills() {
	return (
		<main className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
			<div className="w-full max-w-4xl">
				<Link to="/portfolio" className="text-blue-600 hover:underline mb-4 inline-block">
					← ポートフォリオ一覧に戻る
				</Link>
				
				<SkillsSection />
			</div>
		</main>
	);
}
