import React from "react";

const Tarefa = ({ tarefa, listaTarefa, setTarefa }) => {
  function removerTarefa() {
    const novaLista = [...listaTarefa];
    const listaFiltrada = novaLista.filter((tar) => tar !== tarefa);
    setTarefa(listaFiltrada);
  }

  return (
    <li>
      <p>{tarefa}</p>
      <button onClick={() => removerTarefa()}>Remover</button>
    </li>
  );
};

export default Tarefa;
