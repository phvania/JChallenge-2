
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey! You clicked the button!");
}
//prompt the user for the password criteria
//password leanth 8 to 128
//uppercase, lowercase, number, special character
//validate the input 
//display the generated  password on the  page

return ' generated password will go here';
  





//Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 

  var password = prompt('what is your password?', '') ;
  var length = 8;
  var  includeUppercase =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var  includeLowercase = "abcdefghijklmnopqrstuvwxyz";
  var  includeNumber = "1234567890";
  var includeSymbol = "! $ %  + # _~ /" ;

  var  allchars = upperCase + lowerCase +number + symbol;

   function generatePassword() {
    var password = "";
    password += includeUppercase[ Math.floor(Math.random() * includeUppercase .length)];
    password += includeLowercase[ Math.floor( Math.random() * includeLowercase.length)];
    password += includeNumber[ Math.floor( Math.random() * includeNumber.length)];
    password += includeSymbol[ Math.floor( Math.random() * includeSymbol.length)];

   }
while( length> password.length){
  password += allchars[ Math.floor( Math.random() * allchars.length)];
}

passwordText.value = password;






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) password += includeUppercase[ Math.floor(Math.random() * includeUppercase .length)];
    