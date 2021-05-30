function checkForName(inputText) {
  console.log("::: Running checkForName :::", inputText);
  if (!inputText || !inputText.length) {
    return false;
  }
  if (!inputText.test(/^[A-Za-z\d\s\.-_]+$/g)) {
    return false;
  }
  return true;
}

export { checkForName };
