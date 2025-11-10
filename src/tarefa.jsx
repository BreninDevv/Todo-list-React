import React from "react";

function Tarefa({ tarefa, removerTarefa, alternarConclusao }) {
  const handleToggle = () => {
    alternarConclusao(tarefa.id);
  };

  const handleRemove = () => {
    removerTarefa(tarefa.id);
  };

  return (
    <li className={`tarefas ${tarefa.concluida ? "tarefa-concluida" : ""}`}>
      <span
        style={{ textDecoration: tarefa.concluida ? "line-through" : "none" }}
      >
        {tarefa.texto}
      </span>

      <div className="checkAndBtn">
        <label className="checkbox">
          <input
            type="checkbox"
            checked={tarefa.concluida}
            onChange={handleToggle}
          />
        </label>
        <button className="btnRemove" onClick={handleRemove}>
          X
        </button>
      </div>
    </li>
  );
}

export default Tarefa;
