import React from "react";

const Tarefa = ({ tarefa, listaTarefa, setTarefa }) => {
  function removerTarefa() {
    const novaLista = [...listaTarefa];
    const listaFiltrada = novaLista.filter((tar) => tar !== tarefa);
    setTarefa(listaFiltrada);
  }

  return (
    <li className="tarefas">
      <p>{tarefa}</p>
      <div className="checkAndBtn">
        <label className="checkbox">
          <input type="checkbox" />
        </label>
        <button className="btnRemove" onClick={() => removerTarefa()}>
          X
        </button>
      </div>
    </li>
  );
};

export default Tarefa;
