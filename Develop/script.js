// Assignment code here

// Array of objects for each character type with their ascii values.
// Each character types will have their own beginning and end ascii values.
// The ascii values for the "special characters" are spread apart from each other.
// ascii table: http://www.asciitable.com/
var charType = [
  {
    type: "numeric", // a type of numeric character
    asciiBegin: 48, // the ascii value for 0
    asciiEnd: 57  // the ascii value for 9
  },
  {
    type: "upper", // a type of uper case character
    asciiBegin: 65, // the ascii value for A
    asciiEnd: 90 // the ascii value for Z
  },
  {
    type: "lower", // a type of lower case character
    asciiBegin: 97, // the ascii value for a
    asciiEnd: 122 // the ascii value for z
  },
  {
    type: "special"// a special type of character
  }
]

var specialType = [
  {
    range: "Space to /", // targeted characters
    begin: 32, // space has value of 32
    end: 47 // / has value of 47
  },
  {
    range: ": to @",
    begin: 58,
    end: 64
  },
  {
    range: "[ to `",
    begin: 91,
    end: 96
  },
  {
    range: "{ to ~",
    begin: 123,
    end: 126
  }
]


// getPassLength function prompts the user for the length of the password.
// This function will loop until the user inputs the correct value.
// The function returns the prompted *valid* integer value.
var getPassLength = function () {
  
  var passLength = 0; // Length of a passcode

  while (passLength < 8 || passLength > 128 || isNaN(passLength) ){
    passLength = 0;
    passLength = parseInt(prompt("Enter a number to choose a password length of at least 8 characters and no more than 128 characters"));

    if (passLength < 8 ){

      alert("You entered a number that's too low. Password length must be at least 8 characters and no more than 128 characters");

    } else if (passLength > 128) {

      alert("You entered a number that's too high. Password length must be at least 8 characters and no more than 128 characters");

    } else if (isNaN(passLength)){

      alert("You entered an invalid number. Password length must be an integer.");

    } 
  }
  return passLength;
}


// This function generates a random number that goes from min to max integer values
var passwordRNG = function (min, max) {

  var value = Math.floor(Math.random() * (max - min)) + min;

  return  value;//return random integer value
  
}


// make a function that repeatedly generates a random character and concactenates the characters until the desired password length
var generatePassword = function () {

  // Prompt length of pass
  var passLength = getPassLength();

  // Confirm for lower case 
  var lowerCase = confirm("Would you like your password to contain lower case alphabetical character?");

  // Confirm for upper case
  var upperCase = confirm("Would you like your password to contain upper case alphabetical character?");

  // Confirm for numeric value
  var numeric = confirm("Would you like numeric values in your passcode?");

  // Confirm for special characters
  var special = confirm("Would you like special characters in your passcode?");

  // An empty password string. This string will be concatenated with random chars during the following while loop
  var password = "";

  // Repeatedly generates a value within the index
  while(password.length < passLength){
    
    // Randomly choose a type of character to generate
    var arrayIndex = passwordRNG(0, charType.length); 

    if (arrayIndex === 0 && numeric){

      var min = charType[arrayIndex].asciiBegin; //Pick up the first ascii value for this type of character
      var max = charType[arrayIndex].asciiEnd + 1; //The max value for rng is the last ascii value + 1
      var asciiVal = passwordRNG(min, max); //Retrieve a random ascii value within the range of the character type
      password += String.fromCharCode(asciiVal); //Concactenate the random character to the password string

    } else if (arrayIndex === 1 && upperCase){
      
      var min = charType[arrayIndex].asciiBegin;
      var max = charType[arrayIndex].asciiEnd + 1;
      var asciiVal = passwordRNG(min, max); 
      password += String.fromCharCode(asciiVal);

    } else if (arrayIndex === 2 && lowerCase){

      var min = charType[arrayIndex].asciiBegin;
      var max = charType[arrayIndex].asciiEnd + 1;
      var asciiVal = passwordRNG(min, max); 
      password += String.fromCharCode(asciiVal);

    } else if (arrayIndex === 3 && special){

      arrayIndex = passwordRNG(0, specialType.length); //pick a random index within the specialType array
      var min = specialType[arrayIndex].begin;
      var max = specialType[arrayIndex].end;
      var asciiVal = passwordRNG(min, max); 
      password += String.fromCharCode(asciiVal);

    } 
  }
  return password;
}
  




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
