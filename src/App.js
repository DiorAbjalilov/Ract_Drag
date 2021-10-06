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

  return (
    <div className="App">
      <main className="flexbox">
        <Board id="board-1" className="board">
          <h3>All List</h3>
          <Profil users={users} />
        </Board>
        <Board id="board-2" className="board">
          <h3>My List</h3>
          <button className="btn">Submit List</button>
        </Board>
      </main>
    </div>
  );
}
