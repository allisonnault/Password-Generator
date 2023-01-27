// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialChar = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\ ", "\]", "^", "_", "`", "{", "|", "}", "~"];





// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



function generatePassword() {
  var passwordLength = parseInt(prompt("How many characters would you like your password to contain?"));

  var charSelection = [];
  var chosenPassword = [];
  if ((passwordLength < 8) || (passwordLength > 128)) {
    alert("Please select a number between 8 and 129");
    generatePassword();
  }

  var hasNumeric = confirm("Click OK to confirm including numeric characters.");
  if (hasNumeric) {
    charSelection.push(...numericChar); 
    // the ... sends just the values into the new array, instead of creating an object
  }

  var hasLower = confirm("Click OK to confirm including Lower characters.");
  if (hasLower) {
    charSelection.push(...lowerChar);
  }

  var hasUpper = confirm("Click OK to confirm including Upper characters.");
  if (hasUpper) {
    charSelection.push(...upperChar);
  }

  var hasSpecial = confirm("Click OK to confirm including Special characters.");
  if (hasSpecial) {
    charSelection.push(...specialChar);
  }

  if ((hasNumeric === false) && (hasLower === false) && (hasUpper === false) && (hasSpecial === false)) {
    alert('Must select at least one character type');
    generatePassword();
  }

  
    for (var i = 0; i < passwordLength; i++) {
      var strChar = charSelection[Math.floor(Math.random() * charSelection.length)];
      chosenPassword.push(strChar);
    }
  
return chosenPassword.join("");

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

