import { Link } from "react-router-dom";

const skillCategories = [
	{
		category: "プログラミング言語",
		skills: [
			{ name: "JavaScript/TypeScript", level: 90, color: "bg-yellow-500" },
			{ name: "Python", level: 85, color: "bg-blue-500" },
			{ name: "Java", level: 80, color: "bg-orange-500" },
			{ name: "C++", level: 75, color: "bg-blue-600" },
			{ name: "Go", level: 70, color: "bg-cyan-500" }
		]
	},
	{
		category: "フレームワーク・ライブラリ",
		skills: [
			{ name: "React", level: 90, color: "bg-cyan-400" },
			{ name: "Node.js", level: 85, color: "bg-green-500" },
			{ name: "Vue.js", level: 80, color: "bg-green-400" },
			{ name: "Django", level: 75, color: "bg-green-600" },
			{ name: "TensorFlow", level: 70, color: "bg-orange-500" }
		]
	},
	{
		category: "データベース",
		skills: [
			{ name: "PostgreSQL", level: 85, color: "bg-blue-500" },
			{ name: "MongoDB", level: 80, color: "bg-green-500" },
			{ name: "Redis", level: 75, color: "bg-red-500" },
			{ name: "MySQL", level: 80, color: "bg-blue-600" }
		]
	},
	{
		category: "ツール・インフラ",
		skills: [
			{ name: "Docker", level: 85, color: "bg-blue-500" },
			{ name: "AWS", level: 80, color: "bg-orange-500" },
			{ name: "Git", level: 90, color: "bg-orange-600" },
			{ name: "Linux", level: 85, color: "bg-yellow-600" }
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
										<span className="text-sm text-gray-500">{skill.level}%</span>
									</div>
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div
											className={`h-2 rounded-full ${skill.color}`}
											style={{ width: `${skill.level}%` }}
										></div>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
			<div className="mt-8 p-6 bg-gray-50 rounded-lg">
				<h3 className="text-lg font-semibold mb-3">スキルレベルについて</h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
					<div>
						<span className="font-medium">90-100%:</span> 実務で十分に活用でき、他者に指導できるレベル
					</div>
					<div>
						<span className="font-medium">80-89%:</span> 実務で問題なく使用でき、応用も可能なレベル
					</div>
					<div>
						<span className="font-medium">70-79%:</span> 基本的な使用は可能で、学習を継続中のレベル
					</div>
				</div>
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