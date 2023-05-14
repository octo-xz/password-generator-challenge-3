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
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

//questions for password parameters
function generatePassword() {
  //password length
  var passLength = prompt("What password length do you want?") 
  passLengthInt = parseInt(passLength)
  
  //special characters y/n
  var specialConfirm = confirm("Do you want to use special characters?")
  //lowercase characters y/n
  var lowerCase = confirm("Do you to use lowercase characters?")
  //uppercase characters y/n
  var upperCase = confirm("Do you want to use uppercase characters?")
  //include numbers y/n
  var numbersConfirm = confirm("Do you want to use numbers?")
}



  var allChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQESTUVWXYZ123456789!@#$%^&*()-_=+/?\|][}{;:'><.,`~"
  var lower = "abcdefghijklmnopqrstuvwxyz"
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var nums = "123456789"
  var specials = "!@#$%^&*()-_=+/?\|][}{;:'><.,`~"

  if (passLength < 8) {
    alert("password must be greater than 8 characters")
    return null;
  }

  if (specialConfirm) {
    specialsIndex = Math.floor(Math.random() * specials.length)
    special = specials[specialsIndex]
  } else {
    specials * 0
  }

  if (lowerCase) {
    lowerIndex = Math.floor(Math.random() * lower.length)
    lowerC = lower[lowerIndex]
  } else {
    lower * 0
  }

  if (upperCase) {
    upperIndex = Math.floor(Math.random() * upper.length)
    upperC = upper[upperIndex]
  } else {
    upper * 0
  }

  if (numbersConfirm) {
    numbersIndex = Math.floor(Math.random() * nums.length)
    numsC = nums[numbersIndex]
  } else {
    nums * 0
  }

  console.log(passLength, upperCase, lowerCase, specialConfirm, numbersConfirm)
  return passLength;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);