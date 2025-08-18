import type { ComponentType } from "react";
import { Link, useParams } from "react-router-dom";
import WorksHuracan from "./Models/WorksHuracan";

const modelIdToComponent: Record<string, ComponentType> = {
	"works-huracan": WorksHuracan,
};

export default function ModelViewer() {
	const { modelId } = useParams();
	const Selected = (modelId && modelIdToComponent[modelId]) || null;

	if (!Selected) {
		return (
			<main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
				<div className="rounded-2xl shadow-md bg-white p-8 text-center">
					<h2 className="text-2xl font-semibold mb-3">モデルが見つかりません</h2>
					<p className="text-gray-600 mb-6">指定されたモデルID: {modelId}</p>
					<Link to="/models" className="text-blue-600 hover:underline">モデル一覧に戻る</Link>
				</div>
			</main>
		);
	}

	return <Selected />;
}