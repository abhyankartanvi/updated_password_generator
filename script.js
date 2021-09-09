//user-input

var confirmCharacters;
var confirmNumbers;
var confirmLowercase;
var confirmUppercase;
var confirmSpecialCharacters;
var characterType;

//various arrays
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Prompt to confirm how many characters the user would like in their password
function generateArray() {
  confirmCharacters = prompt(
    "How many characters would you like in your password? Please choose between 8 and 128"
  );
  //if statement for character confirmation
  if (!confirmCharacters) {
    alert("This field cannot be blank, please choose between 8 and 128");
  } else if (confirmCharacters < 8 || confirmCharacters > 128) {
    alert("Please choose characters between 8 and 128");
  } else {
    confirmNumbers = confirm("Click ok if you want to include numbers");
    confirmLowercase = confirm(
      "Click ok if you want to include Lower case letters"
    );
    confirmUppercase = confirm(
      "Click ok if you want to include Upper case letters"
    );
    confirmSpecialCharacters = confirm(
      "Click ok if you want to include special characters"
    );
  }
  //if statatement for the condition = user must select atleast one character type
  if (
    !confirmNumbers &&
    !confirmLowercase &&
    !confirmUppercase &&
    !confirmSpecialCharacters
  ) {
    characterType = alert("Please choose atleast one character type");
  }
  //if statement for the condition = user selects all 4 character types
  else if (
    confirmNumbers === true &&
    confirmLowercase === true &&
    confirmUppercase === true &&
    confirmSpecialCharacters === true
  ) {
    return (characterType =
      numbers + lowerCase + upperCase + specialCharacters);
  }
  //else if statement for the condition = user selects 3 character types
  else if (confirmNumbers && confirmLowercase && confirmUppercase) {
    return (characterType = numbers + lowerCase + upperCase);
  } else if (confirmNumbers && confirmLowercase && confirmSpecialCharacters) {
    return (characterType = numbers + lowerCase + specialCharacters);
  } else if (confirmNumbers && confirmUppercase && confirmSpecialCharacters) {
    return (characterType = numbers + upperCase + specialCharacters);
  } else if (confirmLowercase && confirmUppercase && confirmSpecialCharacters) {
    return (characterType = lowerCase + upperCase + specialCharacters);
  }
  //else if statement for the condition = user selects 2 character type (6 poss)
  else if (confirmNumbers && confirmLowercase) {
    return (characterType = numbers + lowerCase);
  } else if (confirmNumbers && confirmUppercase) {
    return (characterType = numbers + upperCase);
  } else if (confirmNumbers && confirmSpecialCharacters) {
    return (characterType = numbers + specialCharacters);
  } else if (confirmLowercase && confirmUppercase) {
    return (characterType = lowerCase + upperCase);
  } else if (confirmLowercase && confirmSpecialCharacters) {
    return (characterType = lowerCase + specialCharacters);
  } else if (confirmUppercase + confirmSpecialCharacters) {
    return (characterType = upperCase + specialCharacters);
  }
  //else if statement for the condition = user selects 1 character type (4 poss)
  else if (confirmNumbers) {
    return (characterType = numbers);
  } else if (confirmLowercase) {
    return (characterType = lowerCase);
  } else if (confirmUppercase) {
    return (characterType = upperCase);
  } else if (confirmSpecialCharacters) {
    return (characterType = specialCharacters);
  }
}

//Math function created to generate random password. Assisted by TA
function generatePassword() {
  var password = "";
  var passwordArray = generateArray();
  var characterLength = parseInt(confirmCharacters);
  for (var i = 0; i < characterLength; i++) {
    var randChar = Math.floor(Math.random() * characterLength);
    password += passwordArray[randChar];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
