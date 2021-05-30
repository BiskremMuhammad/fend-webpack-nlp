function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  let errorIndicator = document.getElementById("errors");
  document.getElementById("name").classList.remove("warn");
  errorIndicator.innerHTML = "";

  if (!Client.checkForName(formText)) {
    document.getElementById("name").classList.add("warn");
    errorIndicator.innerHTML = "Please enter a valid sentence.";
  } else {
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
}

export { handleSubmit };
