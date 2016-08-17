var submitButton = document.getElementById("submit");
var clearButton = document.getElementById("clear");
var userInput = document.getElementById("inputNumber");
var output = document.getElementById("output");
var fahr = document.getElementById("fahr");
var celc = document.getElementById("celc");

// document.getElementById("button").onclick = determineConverter;

submitButton.addEventListener("click", determineConverter);


function determineConverter () {
	fahr.addEventListener("click", toFahrenheit);
	celc.addEventListener("click", toCelsius);
}

//T(°C) = (T(°F) - 32) × 5/9 
function toCelsius (input) {
	var input = userInput.value;
	var fahrToCelc = ((input -32)*5)/9;
	output.value = fahrToCelc;
	console.log(output.value);
}

//T(°F) = T(°C) × 9/5 + 32
function toFahrenheit (input) {
	var input = userInput.value;
	var celcToFahr = ((input *9)/5)+32;
	output.value = celcToFahr;
	console.log(output.value);
}




// Get a reference to the button element in the DOM


// This function should determine which conversion should
// happen based on which radio button is selected.
// function determineConverter (clickEvent) {
//    console.log("event", clickEvent);
// }

// Assign a function to be executed when the button is clicked

