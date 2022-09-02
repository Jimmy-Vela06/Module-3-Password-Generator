// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var userInput = window.prompt("Length of Password?")

  var passLength = parseInt(userInput) // Converts String to Integer

  if (isNaN(passLength)) {
    // window.alert("Not A Number 🥲")
    return "Not A Number 🥲"
  }

  if (passLength < 8 || passLength > 128) {
    // window.alert ("YIKES!!! Password length must Be between 8 and 128 characters.")
    return "YIKES!!! Password length must Be between 8 and 128 characters."
  }

  var AddNumbers = window.confirm("Would you like to add number???")
  var lowerCase = window.confirm("Would you like to include lower case letters???")
  var upperCase = window.confirm("Would you like to include upper case letters???")
  var specialCharectars = window.confirm("Would you like to include special case characters???")

  if (!AddNumbers && !lowerCase && !upperCase && !specialCharectars) {
    return "Please choose another option, Thank you."
  }
 
  var password = ""
  var validCharacters = []
  if (AddNumbers){
    validCharacters += "1234567089"
  }
  if(lowerCase){
    validCharacters += "abcefghijklmnopqrstuvwxyz"
  }
  if(upperCase){
    validCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (specialCharectars){
    validCharacters += "!@#$%^&*()"
  }
  for(let i = 0 ; i<passLength;i++){
    var random = Math.floor(Math.random() * validCharacters.length) 
    password += validCharacters[random]
  }
  return password
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

