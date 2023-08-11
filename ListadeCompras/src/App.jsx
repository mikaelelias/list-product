import React, { useRef, useState } from "react";
import {v4} from 'uuid';

function App() {
  const [produtos, setProdutos] = useState([]);
  const inputRef = useRef();

  function cliqueNoBotao() {
    setProdutos([inputRef.current.value, ...produtos]);
    inputRef.current.value = "";
  }

  return (
    <div>
      <h1>Lista de Compras</h1>
      <h2>teste</h2>
      <input placeholder="Produtos" ref={inputRef} />
      <button onClick={cliqueNoBotao}>Adicionar Produto</button>

      {produtos.map(produto => (
        <div key={v4}>{produto}</div>
      ))}
    </div>
  );
}

export default App;
