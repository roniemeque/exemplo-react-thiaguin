import React, { useState, useEffect } from "react";
import Pessoa from "./Pessoa";

function App() {
  const [pessoas, setPessoas] = useState([]);
  const [chamando, setChamando] = useState("Thiago");

  const buscaPessoa = async () => {
    setPessoas([]);

    const res = await fetch(
      `https://uinames.com/api/?amount=10&region=brazil&ext`
    );
    const data = await res.json();

    console.log(data);

    setPessoas(data);
  };

  useEffect(() => {
    buscaPessoa();
  }, []);

  return (
    <div>
      {chamando && <p>{chamando}</p>}
      {!pessoas.length ? "Carregando..." : "Carregado!!"}
      {!!pessoas.length && (
        <ul>
          {pessoas.map(pessoa => (
            <Pessoa
              setChamando={setChamando}
              pessoa={pessoa}
              key={pessoa.name}
            ></Pessoa>
          ))}
        </ul>
      )}
      <button onClick={buscaPessoa}>buscar pessoas</button>
    </div>
  );
}

export default App;
