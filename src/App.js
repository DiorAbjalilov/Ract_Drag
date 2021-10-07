import Board from "./components/Board";
import Load from "./api/Load";
import "./App.css";
import Profil from "./api/Profil";
import { useEffect, useState } from "react";
export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Load().then((result) => {
      setUsers(result.data);
    });
  }, []);

  const clickHandle = () => {
    const board = document.querySelector("#board-2");
    const objUser = {
      item: board.innerHTML,
    };
    const objectString = JSON.stringify(objUser);
    const objectParse = JSON.parse(objectString);
    console.log(objectString);
    console.log(objectParse);

    const flexbox = document.querySelector(".flexbox");
    const divbox = document.createElement("div");
    flexbox.appendChild(divbox);
    divbox.className = "board";
    divbox.innerHTML = objectParse.item;
  };

  return (
    <div className="App">
      <main className="flexbox">
        <Board id="board-1" className="board">
          <h3>All List</h3>
          <Profil key="1" users={users} />
        </Board>
        <Board id="board-2" className="board">
          <h3>My List</h3>
          <button onClick={clickHandle} className="btn">
            Submit List
          </button>
        </Board>
      </main>
    </div>
  );
}
