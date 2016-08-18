var submitButton = document.getElementById("submit");
var clearButton = document.getElementById("clear");
var userInput = document.getElementById("inputNumber");
var output = document.getElementById("output");
console.log(output);
//T(°C) = (T(°F) - 32) × 5/9 
function toCelsius (input) {
	var input = userInput.value;
	var fahrToCelc = ((input -32)*5)/9;
	output.value = fahrToCelc;
	console.log(output.value);
	if (fahrToCelc>32){
		output.style.color="red";
	} else if (fahrToCelc<0){
		output.style.color="blue";
	} else {
		output.style.color="green";
	}
}
//T(°F) = T(°C) × 9/5 + 32
function toFahrenheit (input) {
	var input = userInput.value;
	var celcToFahr = ((input *9)/5)+32;
	output.value = celcToFahr;
	console.log(output.value);
	if (celcToFahr>90){
		output.style.color="red";
	} else if (celcToFahr<32){
		output.style.color="blue";
	} else {
		output.style.color="green";
	}
}

function determineConverter () {
	var fahr = document.getElementById("fahr");
	var celc = document.getElementById("celc");
	fahr.addEventListener("checked", toFahrenheit);
	celc.addEventListener("checked", toCelsius);
	if (celc.checked) { 
		toCelsius(); 
		console.log("celsius was checked");
		output.innerHTML += "<div>" + output.value + "</div>"
	} else if (fahr.checked) {
			toFahrenheit(); 
			console.log("Fahrenheit was checked");
			output.innerHTML += "<div>" + output.value + "</div>"
		} else {
			console.log("Nothing or both were checked");
			}	
}

function enterKeyPressed(keypress){
 if (keypress.which === 13) {
   determineConverter();
 }
}

function clear() {
	document.getElementById("output").innerHTML = "";
	document.getElementById("inputNumber").value = "";
}

submitButton.addEventListener("click", determineConverter);
clearButton.addEventListener("click", clear);
document.addEventListener("keypress", enterKeyPressed)

