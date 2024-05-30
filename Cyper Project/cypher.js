//The variable 'asciiArray' stores values that can be used for later.
let asciiArray = [];

function messageArray(array) {
  //This function finds the ascii values of the message given and stores it in 'asciiArray'.
  for (i = 0; i < array.length; i++) {
    asciiArray.push(array.charCodeAt(i));
  }

  return asciiArray;
}

//The function below sorts through the array and replaces the ascii values with the approriate coded letter.
function encodeMessage(encode) {
  for (i = 0; i < encode.length; i++) {
    //The first 2 if statements replace all the uppercase ascii values with the new uppercase encoded letters.
    if (encode[i] >= 65 && encode[i] <= 75) {
      encode.splice(i, 1, String.fromCharCode(encode[i] + 15));
    } else if (encode[i] >= 76 && encode[i] <= 90) {
      encode.splice(i, 1, String.fromCharCode(encode[i] - 11));
    } else if (encode[i] >= 97 && encode[i] <= 107) {
      //The next 2 if statements replace all the lowercase ascii values with the new lowercase encoded letters.
      encode.splice(i, 1, String.fromCharCode(encode[i] + 15));
    } else if (encode[i] >= 108 && encode[i] <= 122) {
      encode.splice(i, 1, String.fromCharCode(encode[i] - 11));
    } else {
      //The else statement returns all the acscii values that do not need to be encoded.
      encode.splice(i, 1, String.fromCharCode(encode[i]));
    }
  }
}

//The function below converts the array into a String variable for easier readability.
function displayMessage(displayCode) {
  let display = "";

  for (i = 0; i < displayCode.length; i++) {
    display = display + displayCode[i];
  }

  return display;
}

//The line below asks the user for a message to encode and stores it as a string.
let message = prompt("Please enter a message you would like to encode:");

//The lines below execute their approriate functions.
let newMessage = messageArray(message);

encodeMessage(newMessage);

//This executes the appropriate function and displays the encoded message.
console.log("The encode message is:\n" + displayMessage(asciiArray));

/*References: 
https://youtu.be/4mp-6a3vARU?si=oj2ZAe5aXruxTDPw
https://www.w3schools.com/jsref/jsref_fromcharcode.asp#:~:text=fromCharCode()%20method%20converts%20Unicode,The%20syntax%20is%20always%20String.*/
