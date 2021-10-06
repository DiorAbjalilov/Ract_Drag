import ProfilCard from "./ProfilCard";

function Profil({ users }) {
  return users.map((user) => {
    return <ProfilCard user={user} />;
  });
}

export default Profil;
