import Board from "./components/Board";
import CardProfil from "./api/profilCard";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <main className="flexbox">
        <Board id="board-1" className="board">
          <h3>All List</h3>
          <CardProfil />
        </Board>
        <Board id="board-2" className="board">
          <h3>My List</h3>
        </Board>
      </main>
    </div>
  );
}
