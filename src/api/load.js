function load() {
  const url = "https://reqres.in/api/users?";
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
}

export default load;
