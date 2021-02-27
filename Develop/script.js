// Assignment code here

// Array of objects for each character type
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

    // The ascii values for the special characters are spread apart from each other.
    // Each section will have their own beginning and end values.
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

// create a function that checks for pass length
var passLength = function () {
  // check if the value is null
  
    // check if the value is greater than 7 and less than 129
    // check if the value is an integer type.
      // loop if it fails any of the above
    
    // set the password length variable to the user input if it passes
}

    

// Create a function that passes range of numbers
  // if xx is false, values xx ~ yy are not allowed **repeat for each character type.
  
// create a function that checks if the rng is within the range of accepted range

// create RNG that goes from min to max
var passwordRNG = function (min, max) {
  return Math.floor(Math.random() * min - max) + min;
}

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
