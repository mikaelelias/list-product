import React, { useRef, useState } from "react";
import { v4 } from 'uuid';
import './index.css';

function App() {
  const [produtos, setProdutos] = useState([]);
  const inputRef = useRef();

  function cliqueNoBotao() {
    setProdutos([{ id: v4(), nome: inputRef.current.value }, ...produtos]);
    inputRef.current.value = "";  
  }

  function deletarProduto(id) {
    setProdutos(produtos.filter(produto => produto.id !== id))
  }

  return (
    <div className="list">
      <h1>Lista de Compras</h1>
      <input placeholder="Produtos" ref={inputRef} />
      <button onClick={cliqueNoBotao}>Adicionar Produto</button>

      {produtos.map(produto => (
        <div key={produto.id}>
          <p>{produto.nome}</p>      
          <button onClick={() => deletarProduto(produto.id)}>🗑️</button>
        </div>
      ))}
    </div>
  );
}

export default App;