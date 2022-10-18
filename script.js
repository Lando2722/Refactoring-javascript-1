// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var length=prompt("pick a length between 8 and 128")
  var lowercasechar=confirm("do you want lowercase characters?")
  var lowercase="abcdefghijklmnopqrstuvwxyz"
  var options=""
  if (lowercasechar){
    options+=lowercase
  }
  var uppercasechar=confirm("do you want uppercase characters?")
  var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if (uppercasechar){
    options+=uppercase
  }
  var numberchar=confirm("do you want to use a number?")
  var number="0123456789"
  if (numberchar){
    options+=number
  }
  var specialchar=confirm("Do you want any special characters included?")
  var special=" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  if (specialchar){
    options+=special
  } 


  var password=""
  for (let i = 0; i <length; i++) {
    password+=options.charAt(Math.floor(Math.random()*options.length))
  }
  return password  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
