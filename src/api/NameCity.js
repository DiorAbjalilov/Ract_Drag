function NameCity({ name }) {
  let date = new Date().toLocaleTimeString();
  return (
    <div>
      <h4>{name}</h4>
      <h5>Uzbekistan, Samarkan Registan</h5>
      <p>Date: {date}</p>
    </div>
  );
}

export default NameCity;
