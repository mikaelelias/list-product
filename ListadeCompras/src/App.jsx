import { useRef } from "react"

function App() {
  const inputRef = useRef ()

  function cliqueinoBotao(){
    console.log(inputRef.current.value)
  }

  return (
    <div>
      <h1>Lista de Compras</h1>
      <h2>teste</h2>
      <input placeholder="Produtos" ref={inputRef}/>
      <button onClick={cliqueinoBotao}>Adicionar Produto</button>
    </div>
  )
}

export default App
