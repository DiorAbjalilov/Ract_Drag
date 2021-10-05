import { useEffect, useState } from "react";
import load from "./load";
import Card from "../components/Card";

function CardProfil() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    load().then((result) => {
      console.log(result.data[1].email);
      setUsers(result.data[1].email);
    });
  }, []);

  return (
    <div>
      <Card id="card-1" className="card" draggable="true">
        <p>{users}</p>
      </Card>
      <Card id="card-2" className="card" draggable="true">
        <p>{users}</p>
      </Card>
      <Card id="card-3" className="card" draggable="true">
        <p>{users}</p>
      </Card>
      <Card id="card-4" className="card" draggable="true">
        <p>{users}</p>
      </Card>
      <Card id="card-5" className="card" draggable="true">
        <p>{users}</p>
      </Card>
      <Card id="card-6" className="card" draggable="true">
        <p>{users}</p>
      </Card>
    </div>
  );
}

export default CardProfil;
