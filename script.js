// Assignment code here
//user clicks generate password button
//select parameters for password
//using prompt for password length
//confirm boolean for password parameters(upper, lower, special, number)
//user will get password generated
//have a way of finding out which of the characters was accepted and pull from those sets of data
//randomize characters pulled between 8-128 one specific number user gave
//store random character generated
//send completed password back to the user

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // this selects and defines the text area
  var passwordText = document.querySelector("#password");
// this puts the password in the text area 
  passwordText.value = password;
}
// function to generate a password
function generatePassword() {
  //password length prompts user to enter pass length
  var passLength = prompt("What password length do you want?")
  // changes password length to integers
  //converting string to integer
  //opposite .toString would convert it back to a string from an integer
  passLengthInt = parseInt(passLength)

 //creates logic to keep password from being too short
//  if (passLengthInt < 8) {
//   alert("password must be greater than 8 characters")
//   return null;
//}
//creates logic to keep password from being too long
if (passLengthInt > 128 || passLengthInt < 8) {
  alert("password length is either too short or too long")
  return null;
}

  //special characters y/n
  var specialConfirm = confirm("Do you want to use special characters?")
  //lowercase characters y/n
  var lowerCase = confirm("Do you to use lowercase characters?")
  //uppercase characters y/n
  var upperCase = confirm("Do you want to use uppercase characters?")
  //include numbers y/n
  var numbersConfirm = confirm("Do you want to use numbers?")

  if(!lowerCase && !upperCase && !numbersConfirm && !specialConfirm) {
    alert("you silly goose there's no password here!")
    return null;
  }

  //starting string for password characters
  let allChar = ""

  if (lowerCase) {
    // adds lower case letters that can be accessed for password
    allChar += "abcdefghijklmnopqrstuvwxyz"
  }

  if (upperCase) {
    // adds upper case letters that can be accessed for password
    allChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  if (numbersConfirm) {
    //adds numbers that can be accessed for password
    allChar += "1234567890"
  }

  if (specialConfirm) {
    //adds special characters that can be accessed for password
    allChar += "!@#$%^&*()-_=+/?\|][}{;:'><.,`~"
  }
  
  //a password that will contain all characters grabbed for allChar 
  //randomly grab a char and store it grab and store

  let selectedChar = ""

  for (let i = 0; i < passLength; i++) {
    selectedChar += allChar[Math.floor(Math.random() * allChar.length)]
  }

  console.log(passLength, upperCase, lowerCase, specialConfirm, numbersConfirm)
  return selectedChar;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


