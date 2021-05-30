function checkForName(inputText) {
  console.log("::: Running checkForName :::", inputText);
  if (!inputText || !inputText.length) {
    return false;
  }
  if (!/^[A-Za-z\d\s\.-_,]+$/g.test(inputText)) {
    return false;
  }
  return true;
}

export { checkForName };
