import React from "react";

function Pessoa({ pessoa, setChamando }) {
  const pessoaTop = `${pessoa.name} é top`;

  return <li onClick={() => setChamando(pessoa.name)}>{pessoaTop}</li>;
}

export default Pessoa;
