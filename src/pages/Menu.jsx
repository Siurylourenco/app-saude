export default function Menu({ mudarPagina }) {
  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-6 ">
        Menu Principal
      </h1>

      <div className="grid gap-4">
        <button onClick={() => mudarPagina("consultas")} className="botao">
          Consultas
        </button>
        <button onClick={() => mudarPagina("exames")} className="botao">
          Exames
        </button>
        <button onClick={() => mudarPagina("vacinacao")} className="botao">
          Vacinação
        </button>
        <button onClick={() => mudarPagina("lembretes")} className="botao">
          Lembretes
        </button>
      </div>
    </div>
  )
}
