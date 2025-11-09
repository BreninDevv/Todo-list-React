import { useEffect, useRef, useState } from "react";
import Tarefa from "./tarefa";
import ButtonDarkMode from "./buttonDarkMode";

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

  const [theme, setTheme] = useState("light");

  const alternarTema = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
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
            <button className="btnAdd" onClick={() => adicionarTarefa()}>
              ADICIONAR
            </button>
          </div>
          <div className="containerUl">
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
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
