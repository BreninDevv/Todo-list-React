import { useRef, useState } from "react";
import Tarefa from "./tarefa";

function App() {
  const [tarefas, setTarefa] = useState([]);
  const inputAdicionar = useRef();

  function adicionarTarefa() {
    const novaLista = [...tarefas];
    const inputValor = inputAdicionar.current.value;
    if (inputValor) {
      novaLista.push(inputValor);
      setTarefa(novaLista);
    }
  }

  return (
    <>
      <h1>To-do List</h1>
      <input ref={inputAdicionar} type="text" placeholder="Digite sua tarefa" />
      <button onClick={() => adicionarTarefa()}>Adicionar</button>
      {tarefas.length > 0 ? (
        <ul>
          {tarefas.map((tar, index) => (
            <Tarefa
              key={index}
              tarefa={tar}
              listaTarefa={tarefas}
              setTarefa={setTarefa}
            />
          ))}
        </ul>
      ) : (
        <p>Você não tem nenhuma tarefa!</p>
      )}
    </>
  );
}
export default App;
