// user clicks a button
  // event listener, calling a function to write password
  // inside our function we prompt for password lenght
    // var passwordLength = prompt("How many characters would you like your password to contain?"); //what does prompt return??
      // we need to validate the prompt so that is meets criteria, must be a number, gt 8 lt 129
      // then user is promted password lenth

      // if(passwordLenght < 8) {
        // alert("Passwrd Length must be at least 8 characters");
      //  }

    // then user confirms for password criteria
      // var hasNumeric = confrim("Click OK to confirm includeing numberic characters.");
       // var hasLower = confrim("Click OK to confirm includeing Lower characters.");
       // var hasUpper = confrim("Click OK to confirm includeing Upper characters.");
       // var hasSpecial = confrim("Click OK to confirm includeing Special characters.");

      //  if(hasNumeric === false && hasLower === false && hasUpper === false && hasSpecial === false){ 
        // alert("Must select at least one character type");
      // }

      //object to store user input
      // var userPassword = {
            // lenght: passwordLenght,
            // hasNumeric: hasNumberic,
            // hasLower: hasLower,
            // hasUpper: hasUpper,
            // hasSpecial: hasSpecial
      // }
      //  return userPassword;

      // create another function to generate password
           // var userOptions = getOptions();
          //  we have an array to store each criteria
            // var possibleChars = [];
            // var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
            var specialChar = ["!", "/"", "#", "$", "%", "&", "/'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", "]", "^", "_", "`", "{", "|", "}", "~"];

            //  var result = [];
        // if(userOptions.hasNumeric === true){
              // possibleChars = possibleChar.concat(numericCharacters);
        // }

      // the password is displayed to the screen
// const alpha = Array.from(Array(26)).map((e, i) => i + 65);
// const alphabet = alpha.map((x) => String.fromCharCode(x));
// console.log(alphabet);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
