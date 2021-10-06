import Card from "../components/Card";
import Avatar from "./Avatar";
import NameCity from "./NameCity";

function ProfilCard({ user }) {
  const name = `${user.first_name} ${user.last_name}`;
  const id = `card-${user.id}`;
  return (
    <>
      <Card id={id} className="card" draggable="true">
        <NameCity name={name} />
        <Avatar url={user.avatar} />
      </Card>
    </>
  );
}

export default ProfilCard;
