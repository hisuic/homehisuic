import { AboutMeSection } from "./AboutMe";
import { SkillsSection } from "./Skills";
import { ContactSection } from "./Contact";
import { WorksSection } from "./Works";

// const portfolioItems = [
// 	{
// 		id: "about-me",
// 		title: "About Me",
// 		description: "自己紹介や経歴について",
// 		icon: "👤",
// 		category: "Profile"
// 	},
// 	{
// 		id: "skills",
// 		title: "Skills",
// 		description: "技術スキルと経験について",
// 		icon: "🛠️",
// 		category: "Skills"
// 	},
// 	{
// 		id: "contact",
// 		title: "Contact",
// 		description: "お問い合わせ方法",
// 		icon: "📧",
// 		category: "Contact"
// 	},
//     {
// 		id: "works",
// 		title: "Works",
// 		description: "成果物",
// 		icon: "📧",
// 		category: "Works"
// 	}
// ];

export default function PortfolioIndex() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-start p-6 bg-gray-100">
			<h1 className="text-3xl font-bold mb-6">Portfolio</h1>
			<p className="text-gray-700 mb-8">ポートフォリオページです</p>

			<div className="mt-12 w-full max-w-4xl space-y-12">
				<AboutMeSection />
				<ContactSection />
				<SkillsSection />
				{/* <WorksSection /> */}
			</div>
		</main>
	);
}
