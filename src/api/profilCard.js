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
    </div>
  );
}

export default CardProfil;
