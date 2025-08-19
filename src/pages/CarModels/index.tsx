import { Link } from "react-router-dom";

const availableModels = [
  { id: "works-huracan", name: "LibertyWalk Lamborghini Huracan Coupe", description: "LibertyWalk本社で撮影したLamborghini Huracanの3Dモデルです．" },
];

export default function CarModelsIndex() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">3D Models</h1>
      <p className="text-gray-700 mb-8">閲覧したい車種を選択してください。</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {availableModels.map((model) => (
          <Link
            key={model.id}
            to={`/models/${model.id}`}
            className="rounded-2xl shadow-md bg-white p-6 hover:shadow-xl transition outline outline-1 outline-gray-200"
          >
            <h2 className="text-xl font-semibold mb-2">{model.name}</h2>
            <p className="text-gray-600">{model.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
