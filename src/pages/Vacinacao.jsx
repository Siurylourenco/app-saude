import { pessoas } from "../data/pessoas"

export default function Vacinacao({ voltar }) {
  return (
    <div className="max-w-md mx-auto p-4">
      <button onClick={voltar}className="mb-4 text-blue-600">← Voltar</button>
      <h2 className="text-xl font-bold mb-4">Vacinação</h2>

      {pessoas.map((p, i) => (
        <div key={i} className="border p-2 mb-2">
          {p.nome} — {p.vacina}
        </div>
      ))}
    </div>
  )
}
