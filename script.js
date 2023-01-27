// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var passwordLenght = parseInt(prompt("How many characters would you like your password to contain?"));
    console.log(passwordLenght);}

if ((passwordLenght < 8) || (passwordLenght > 129)) {
  alert("Please select a number between 8 and 129");}
//    var hasNumeric = confirm("Click OK to confirm including numeric characters.");
//       console.log(hasNumeric);}
//     else {  
//       alert("Please select a number between 8 and 129");}
  
//       var hasLower = confirm("Click OK to confirm including Lower characters.");
//       console.log(hasLower);
  
//       var hasUpper = confirm("Click OK to confirm including Upper characters.");
//       console.log(hasUpper);
  
//       var hasSpecial = confirm("Click OK to confirm including Special characters.");console.log(hasSpecial);
  
      
        // if ((hasNumeric === false) && (hasLower === false) && (hasUpper === false) && (hasSpecial === false)){
        //     alert('Must select at least one character type');
  
    




      // alert("Please select a number between 8 and 129");
    
  

  //   // check to ses if they selected at least one char type
  // if((hasNumeric === false) && (hasLower === false) && (hasUpper === false) && (hasSpecial === false)){
  //     alert('Must select at least one character type');
  // }
    
    // var password = generatePassword();
    // var passwordText = document.querySelector("#password");

  // passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// var specialChar = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\ ", "\]", "^", "_", "`", "{", "|", "}", "~"];

// var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];