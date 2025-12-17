import { pessoas } from "../data/pessoas"

export default function Lembretes({ voltar }) {
  return (
    <div className="max-w-md mx-auto p-4">
      <button onClick={voltar} className="mb-4 text-blue-700 text-lg">
        ← Voltar ao menu
      </button>

      <h2 className="text-2xl font-bold mb-4">
        Lembretes de Saúde
      </h2>

      {pessoas.map((p, i) => (
        <div
          key={i}
          className="bg-red-50 border-l-8 border-red-600 p-4 mb-4 rounded"
        >
          <p className="font-semibold text-lg">
            Atenção, {p.nome}
          </p>

          <p className="mt-2 text-gray-800">
            {p.lembrete}
          </p>

          <p className="mt-2 text-sm text-gray-600">
            Não se esqueça de cuidar da sua saúde.
          </p>

          <button className="mt-3 bg-green-800 text-white px-3 py-2 rounded">
            Marcar como lido
          </button>

        </div>
      ))}
    </div>
  )
}
