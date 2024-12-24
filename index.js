// --------------------------------------------
const btnClear = document.getElementById(`btnClear`);
const passwordInput = document.getElementById(`passwordInput`);
const generatePasswordBtn = document.getElementById(`generatePasswordBtn`);
// --------------------------------------------
btnClear.addEventListener(`click`, () => {
  passwordInput.value = "";
});
// --------------------------------------------
// createPassword()
function createPassword() {
  let password = "";
  const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const smallLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const symbols = "!@#$%^&*()";
  const allValues = capitalLetters + smallLetters + numbers + symbols;
  const passwordLength = 16;
  password +=
    capitalLetters[Math.floor(Math.random() * capitalLetters.length - 1) + 1];
  password +=
    smallLetters[Math.floor(Math.random() * smallLetters.length - 1) + 1];
  password += numbers[Math.floor(Math.random() * numbers.length - 1) + 1];
  password += symbols[Math.floor(Math.random() * symbols.length - 1) + 1];
  for (let index = 0; index < passwordLength; index++) {
    password += allValues[Math.floor(Math.random() * allValues.length - 1) + 1];
  }
  return password;
}
// --------------------------------------------
generatePasswordBtn.addEventListener(`click`, () => {
  passwordInput.value = createPassword();
});
// --------------------------------------------
function applyPadding(element) {
  element.style.padding = "var(--gap)";
  return element;
}
applyPadding(passwordInput);
