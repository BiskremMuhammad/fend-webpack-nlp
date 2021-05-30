async function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  Client.checkForName(formText);
  const data = { name: formText };

  try {
    const res = await fetch("http://localhost:8080/sentiment", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const results = await res.json();
    document.getElementById("results").innerHTML = results.message;
  } catch (er) {
    console.log("request failed with errors: ", er);
  }
}

export { handleSubmit };
