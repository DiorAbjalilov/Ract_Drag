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
  setInterval(() => {
    const boardCard = document.querySelectorAll("#board-2 .card");
    const objUser = [];
    // console.log(boardCard);
    boardCard.forEach((element) => {
      objUser.push({ element });
    });
    // console.log(objUser);
  }, 5000);

  return (
    <div className="App">
      <main className="flexbox">
        <Board id="board-1" className="board">
          <h3>All List</h3>
          <Profil key="1" users={users} />
        </Board>
        <Board id="board-2" className="board">
          <h3>My List</h3>
          <button className="btn">Submit List</button>
        </Board>
      </main>
    </div>
  );
}
