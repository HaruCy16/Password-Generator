const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const passwordField = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:',.<>?";

function getRandomChar(chars) {
  return chars[Math.floor(Math.random() * chars.length)];
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function generatePassword() {
  let characterPool = "";
  if (uppercaseCheckbox.checked) characterPool += uppercaseChars;
  if (lowercaseCheckbox.checked) characterPool += lowercaseChars;
  if (numbersCheckbox.checked) characterPool += numberChars;
  if (symbolsCheckbox.checked) characterPool += symbolChars;

  if (characterPool === "") {
    alert("Please select at least one character type.");
    return;
  }

  let passwordArray = [];
  if (uppercaseCheckbox.checked)
    passwordArray.push(getRandomChar(uppercaseChars));
  if (lowercaseCheckbox.checked)
    passwordArray.push(getRandomChar(lowercaseChars));
  if (numbersCheckbox.checked) passwordArray.push(getRandomChar(numberChars));
  if (symbolsCheckbox.checked) passwordArray.push(getRandomChar(symbolChars));

  while (passwordArray.length < lengthInput.value) {
    let randomChar =
      characterPool[Math.floor(Math.random() * characterPool.length)];
    passwordArray.push(randomChar);
  }

  passwordArray = shuffleArray(passwordArray);
  passwordField.value = passwordArray.join("");
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  navigator.clipboard
    .writeText(passwordField.value)
    .then(() => alert("Password copied to clipboard!"))
    .catch((err) => console.error("Failed to copy: ", err));
});
