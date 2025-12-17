import { useState } from "react"
import Login from "./pages/Login"
import Menu from "./pages/Menu"
import Consultas from "./pages/Consultas"
import Exames from "./pages/Exames"
import Vacinacao from "./pages/Vacinacao"
import Lembretes from "./pages/Lembretes"

export default function App() {
  const [logado, setLogado] = useState(false)
  const [pagina, setPagina] = useState("menu")

  if (!logado) {
    return <Login onLogin={() => setLogado(true)} />
  }

  if (pagina === "consultas") {
    return <Consultas voltar={() => setPagina("menu")} />
  }

  if (pagina === "exames") {
    return <Exames voltar={() => setPagina("menu")} />
  }

  if (pagina === "vacinacao") {
    return <Vacinacao voltar={() => setPagina("menu")} />
  }

  if (pagina === "lembretes") {
    return <Lembretes voltar={() => setPagina("menu")} />
  }

  return <Menu mudarPagina={setPagina} />
}

