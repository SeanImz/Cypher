// Cypher using 15th letter shift
let inputString = prompt("Enter message to be encoded: ");
console.log(`Your message: ${inputString}`);

// Variables
let len = inputString.length;
let messageAscii = [];
let asciiChar;
let codedString = [];
let codedChar;
let outputString = [];

// Function to encode
function encode(e) {
  if ((e >= 65 && e <= 75) || (e >= 97 && e <= 107)) {
    coded = e + 15; // Shift alphabet characters by 15
  } else if ((e >= 76 && e <= 90) || (e >= 108 && e <= 122)) {
    coded = e - 11; // For wrap-around character range - equivalent to plus 15
  } else {
    coded = e + 0; // Keep non-alphabet characters the same
  }
  codedString.push(coded);
  return codedString;
}

// Loop to convert to ascii
for (i = 0; i < len; i++) {
  asciiChar = inputString.charCodeAt(i);
  messageAscii.push(asciiChar);
}

// Shift character by 15
messageAscii.forEach(encode);

// Convert coded ascii numbers back to characters
for (j = 0; j < len; j++) {
  codedChar = String.fromCharCode(codedString[j]);
  outputString.push(codedChar);
}

// Print encoded message
let codedMessage = outputString.join("");
console.log(`Your encoded message: ${codedMessage}`);
