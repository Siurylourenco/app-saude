export default function Login({ onLogin }) {
  function entrar() {
    onLogin()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h1 className="text-xl font-bold mb-4 text-center">
          Acesso ao Sistema
        </h1>

        <input
          type="text"
          placeholder="Usuário"
          className="border p-2 w-full mb-3"
        />

        <input
          type="password"
          placeholder="Senha"
          className="border p-2 w-full mb-4"
        />

        <button
          onClick={entrar}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Entrar
        </button>
      </div>
    </div>
  )
}
