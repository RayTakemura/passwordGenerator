// Assignment code here

// Array of objects for each character type with their ascII values.
// Each character types will have their own beginning and end ascii values.
// The ascII values for the "special characters" are spread apart from each other.
// ascII table: http://www.asciitable.com/
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
    type: "special", // a special type of character
    asciiSets: [
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
  }
]


// getPassLength function prompts the user for the length of the password.
// This function will loop until the user inputs the correct value.
// The function returns the prompted integer value.
var getPassLength = function () {
  
  var passLength = 0; // Length of a passcode

  while (passLength < 8 || passLength > 128 || typeof passLength != "number"){

    passLength = prompt("Enter a number to choose a password length of at least 8 characters and no more than 128 characters");

    if (passLength < 8 ){

      alert("You entered a number that's too low. Password length must be at least 8 characters and no more than 128 characters");

    } else if (passLength > 128) {

      alert("You entered a number that's too high. Password length must be at least 8 characters and no more than 128 characters");

    } else {

      alert("You entered an invalid number. Password length must be an integer.");

    }
  }
  return passLength;
}

// create RNG that goes from min to max
var passwordRNG = function (min, max) {
  return Math.floor(Math.random() * min - max) + min;
}

// make a function that repeatedly generates a random character and concactenates the characters until the desired password length



// run the RNG until the password length matches the prompted length


// Prompt for pass criteria: length
// Confirm for lower case 
// Confirm for upper case
// Confirm for numeric value
// Confirm for special characters

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
