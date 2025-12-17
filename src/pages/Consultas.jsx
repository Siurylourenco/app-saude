import { useState, useEffect } from "react"

export default function Consultas({ voltar }) {
  const [consultas, setConsultas] = useState([])
  const [nome, setNome] = useState("")
  const [tipo, setTipo] = useState("")
  const [editandoId, setEditandoId] = useState(null)
  const [modoPaciente, setModoPaciente] = useState(false)


  // Carregar consultas salvas
  useEffect(() => {
    const dadosSalvos = localStorage.getItem("consultas")
    if (dadosSalvos) {
      setConsultas(JSON.parse(dadosSalvos))
    }
  }, [])

  // Salvar no localStorage
  function salvarNoStorage(lista) {
    localStorage.setItem("consultas", JSON.stringify(lista))
  }

  function salvarConsulta() {
    // edição
    if (editandoId !== null) {
      const listaAtualizada = consultas.map((c) =>
        c.id === editandoId
          ? { ...c, nome, tipo }
          : c
      )
      setConsultas(listaAtualizada)
      salvarNoStorage(listaAtualizada)
      setEditandoId(null)
    } else {
      // criação
      const novaConsulta = {
        id: Date.now(),
        nome,
        tipo,
      }
      const novaLista = [...consultas, novaConsulta]
      setConsultas(novaLista)
      salvarNoStorage(novaLista)
    }

    setNome("")
    setTipo("")
  }

  function editarConsulta(consulta) {
    setNome(consulta.nome)
    setTipo(consulta.tipo)
    setEditandoId(consulta.id)
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <button
        onClick={voltar}
        className="mb-4 text-blue-700 text-lg"
      >
        ← Voltar ao menu
      </button>

      <h2 className="text-2xl font-bold mb-4">
        Consultas
      </h2>

      <div className="flex gap-3 mb-4">
        <button
         onClick={() => setModoPaciente(false)}
         className={`px-4 py-2 rounded ${
         !modoPaciente ? "bg-blue-600 text-white" : "bg-gray-200"
    }`}>
    👩‍⚕️ Modo Cadastro
    </button>

     <button
       onClick={() => setModoPaciente(true)}
       className={`px-4 py-2 rounded ${
       modoPaciente ? "bg-green-600 text-white" : "bg-gray-200"
    }`}>
    👤 Modo Paciente
    </button>
    </div>


      {/* FORMULÁRIO */}
      {!modoPaciente && (
      <div className="bg-gray-100 p-4 rounded mb-6">
        <h3 className="font-semibold mb-2">
          {editandoId ? "Editar consulta" : "Adicionar consulta"}
        </h3>

        <input
          type="text"
          placeholder="Nome da pessoa"
          className="border p-2 w-full mb-3"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="text"
          placeholder="Tipo da consulta"
          className="border p-2 w-full mb-3"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />

        <button
          onClick={salvarConsulta}
          className="bg-green-600 text-white w-full py-2 rounded text-lg"
        >
          Salvar
        </button>
      </div>)}

      {/* LISTA */}
      {consultas.length === 0 && (
        <p className="text-gray-600">
          Nenhuma consulta cadastrada.
        </p>
      )}

      {consultas.map((consulta) => (
        <div
          key={consulta.id}
          className="bg-white border rounded p-3 mb-3"
        >
          <p>
            <strong>Nome:</strong> {consulta.nome}
          </p>
          <p>
            <strong>Consulta:</strong> {consulta.tipo}
          </p>

          {modoPaciente && (
          <p className="text-sm text-gray-600 mt-1">
              Verifique a data e chegue com antecedência.
          </p>
        )}


          <button
            onClick={() => editarConsulta(consulta)}
            className="mt-2 text-blue-600"
          >
            Editar
          </button>
        </div>
      ))}
    </div>
  )
}
