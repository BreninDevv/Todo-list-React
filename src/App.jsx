import { useEffect, useRef, useState } from "react";
import Tarefa from "./tarefa";
import ButtonDarkMode from "./buttonDarkMode";

function App() {
  const [tarefas, setTarefa] = useState([]);
  const inputAdicionar = useRef();

  function adicionarTarefa() {
    const inputValor = inputAdicionar.current.value.trim();
    if (inputValor) {
      const novaTarefa = {
        id: Date.now(),
        texto: inputValor,
        concluida: false,
      };

      setTarefa((prevTarefas) => [...prevTarefas, novaTarefa]);
      inputAdicionar.current.value = "";
    }
  }

  const removerTarefa = (id) => {
    setTarefa((prevTarefas) =>
      prevTarefas.filter((tarefa) => tarefa.id !== id)
    );
  };

  const alternarConclusao = (id) => {
    setTarefa((prevTarefas) =>
      prevTarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  const [theme, setTheme] = useState("light");

  const alternarTema = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      const btnDark = document.getElementById("btnDarkMode");
      const bolinha = document.getElementById("bolinha");
      btnDark.classList.add("dark");
      bolinha.classList.add("dark");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      const btnDark = document.getElementById("btnDarkMode");
      const bolinha = document.getElementById("bolinha");
      btnDark.classList.remove("dark");
      bolinha.classList.remove("dark");
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <div className={`main ${theme}`}>
        <div className="divBtn">
          <span>Dark Mode</span>
          <ButtonDarkMode alternarTema={alternarTema} temaAtual={theme} />
        </div>
        <h1>To-do List</h1>
        <div className="container">
          <div className="inputAndBtn">
            <input
              ref={inputAdicionar}
              type="text"
              placeholder="Digite sua tarefa"
            />
            <button className="btnAdd" onClick={adicionarTarefa}>
              ADICIONAR
            </button>
          </div>
          <div className="containerUl">
            {tarefas.length > 0 ? (
              <ul>
                {tarefas.map((tar) => (
                  <Tarefa
                    key={tar.id}
                    tarefa={tar}
                    removerTarefa={removerTarefa}
                    alternarConclusao={alternarConclusao}
                  />
                ))}
              </ul>
            ) : (
              <p>Você não tem nenhuma tarefa!</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
