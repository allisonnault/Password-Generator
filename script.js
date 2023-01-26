// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var passwordLenght = parseInt(prompt("How many characters would you like your password to contain?"));

    if ((passwordLenght < 8) || (passwordLenght > 129)) {
      alert("Please select a number between 8 and 129");
    }

    
    // var password = generatePassword();
    // var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// var specialChar = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\ ", "\]", "^", "_", "`", "{", "|", "}", "~"];

// var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];