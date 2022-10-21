// Assignment Code
var generateBtn = document.querySelector("#generate");
var reqLower;
var reqUpper;
var reqNumber;
var reqSpecial;
var reqLength;

//Variable arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Write password to the #password input
function writePassword() {
  console.log('reqLength in writepassword', reqLength);

  reqLength = (prompt("Plz enter # of characters required for password"));

  while (reqLength <= 7 || reqLength >= 128) {
    alert("Must be 7-128 characters");
    reqLength = (prompt("Plz enter # of characters required for password"));
  };

  reqLower = (confirm("Should password require lowercase?"));

  reqUpper = (confirm("Should password require UPPERCASE?"));

  reqNumber = (confirm("Should password require numbers? 1, 2, 3"));

  reqSpecial = (confirm("Should password require special characters? #, %, &"));

  while (reqLower === false && reqUpper === false && reqNumber === false && reqSpecial === false) {
    alert("Requirement Missing:");
    reqLower = confirm("Should password require lowercase?");
    reqUpper = confirm("Should password require UPPERCASE?");
    reqNumber = confirm("Should password require numbers? 1, 2, 3");
    reqSpecial = confirm("Should password require special characters? #, %, &");
  };

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
  // need to know about reqLength
  let characters = []
  let password = ''

  // If the user wants lowercase characters in it, then we want to add those characters to the characters array
  if (reqLower === true) {
    characters = characters.concat(lower);
  }
  if (reqUpper === true) {
    characters = characters.concat(upper);
  }
  if (reqSpecial === true) {
    characters = characters.concat(special);
  }
  if (reqNumber === true) {
    characters = characters.concat(number);
  }
  // We want to do something reqLength times
  for (let i = 0; i < reqLength; i = i + 1) {

    // Pick a random character in this characters array, and adding it to the password variable
    // Generate a random number between 0 and the length of the characters - 1
    let randomNumber = Math.floor(Math.random() * characters.length)
    console.log(randomNumber); //44

    let randomCharacter = characters[randomNumber]
    password = password + randomCharacter
  };

  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
