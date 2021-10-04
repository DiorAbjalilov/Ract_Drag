import { useEffect, useState } from "react";
import load from "./load";
import Card from "../components/Card";

function CardProfil() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    load().then((result) => {
      setUsers(result.data);
    });
  }, []);

  return (
    <div>
      <Card id="card-1" className="card" draggable="true">
        <p>card user</p>
      </Card>
    </div>
  );
}

export default CardProfil;
