// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x', 'y', 'z'];

var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialChar = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\ ", "\]", "^", "_", "`", "{", "|", "}", "~"];

var charSelection = [];


// Write password to the #password input
function writePassword() {
    var passwordLenght = parseInt(prompt("How many characters would you like your password to contain?"));
    console.log(passwordLenght);

if((passwordLenght < 8) || (passwordLenght > 129)) {
  alert("Please select a number between 8 and 129");
  return writePassword();}

var hasNumeric = confirm("Click OK to confirm including numeric characters.");
console.log(hasNumeric);
if (hasNumeric) {
  charSelection.push(numericChar);
}

var hasLower = confirm("Click OK to confirm including Lower characters.");
console.log(hasLower);
if (hasLower) {
  charSelection.push(lowerChar);
}
  
var hasUpper = confirm("Click OK to confirm including Upper characters.");
console.log(hasUpper);
if (hasUpper) {
  charSelection.push(upperChar);
}
  
var hasSpecial = confirm("Click OK to confirm including Special characters.");
console.log(hasSpecial);
if (hasSpecial) {
  charSelection.push(specialChar);
}

if ((hasNumeric === false) && (hasLower === false) && (hasUpper === false) && (hasSpecial === false)){
  alert('Must select at least one character type');
  return writePassword();}

var availableChar = Object.values(charSelection);
console.log(availableChar);

    



}

    
    // var password = generatePassword();
    // var passwordText = document.querySelector("#password");

  // passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

