function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  Client.checkForName(formText);
  const data = { name: formText };

  fetch("http://localhost:8081/sentiment", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((results) => {
      document.getElementById("results").innerHTML = results.message;
    })
    .catch((er) => console.log("request failed with errors: ", er));
}

export { handleSubmit };
