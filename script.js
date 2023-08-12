
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("");
 // return 'generated password will go Here;'
}
//prompt the user for the password criteria
//password leanth 8 to 128
//uppercase, lowercase, number, special character
//validate the input 
//display the generated  password on the  page

 
  




//Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 passwordText.value = password;

}
 
//declered variable//prompt//confirm
 
  var  passwordlength = prompt("Your password length will be 8 to 128 character");
  alert ( "your password should contain uppercase, lowercase, number, and symbol");
  var confirm = confirm("My password length will be 8.");
  var  includeUppercase =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var  includeLowercase = "abcdefghijklmnopqrstuvwxyz";
  var  includeNumber = "1234567890";
  var includeSymbol = "! $ %  + # _~ /" ;
  var allchars =  "upperCase + lowerCase +number + symbol";
  
  //ask for password criteria
  //var carType = prompt("what type of password criteria would you like to use?");
  //var carType = prompt("Enter a character type: uppercase, lowercase, number,symbol");

  
  //generate password

   function generatePassword() {
    //evaluate character type
    var password = "";
   console.log( password += includeUppercase [Math.floor(Math.random() * includeUppercase .length)]);

   console.log(password += includeLowercase [ Math.floor( Math.random() * includeLowercase.length)]);
    console.log(password += includeNumber [ Math.floor( Math.random() * includeNumber.length)]);
    console.log(password += includeSymbol [ Math.floor( Math.random() * includeSymbol.length)]);
    console.log(password += includeLowercase[Math.floor(Math.random() * includeLowercase.length)]);
    console.log(password += includeLowercase[Math.floor(Math.random() * includeLowercase.length)]);
   console.log(password += includeLowercase[Math.floor(Math.random() * includeLowercase.length)]);
   console.log(password += includeNumber[Math.floor(Math.random() * includeNumber.length)]);
   return password;
  
   }

  
   var password = "";
   for ( var i = 0; i < passwordlength; i++) {
    password += allchars.charAt( Math.floor(Math.random() * allchars.length));
   }
   generateBtn.value = password;
     password;

   alert( generatePassword());

  
   
   
   
   
   













// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
let button = document.querySelector("#generate");

    //function generate(){
     // let password = "";
      //password += UpperCase [Math.floor(Math.random() * UpperCase.length)];    
        //password += lowerCaseCase [Math.floor(Math.random() * lowerCase.length)];     
        // password += number [Math.floor(Math.random() * number.length)];     
          //password += symbol [Math.floor(Math.random() * symbol.length)];





    