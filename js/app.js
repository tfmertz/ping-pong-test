/*
	Ping-Pong Test app
	Created by: Tom Mertz
	Desc: Prints out a list of numbers from 1 to the number entered
	and prints ping for all multiples of 3, pong for multiples of 5
	and ping-pong for multiples of both
*/

//the button element
var submitButton = document.getElementById("calculate");
//the input text element
var inputText = document.getElementById("number");
//the list to output the results or errors
var resultList = document.getElementById("results");

//pingPong function calculates our results and displays them
var pingPong = function() {
	//grab the input from the input field
	input = parseInt(inputText.value);

	//clear out the list
	resultList.innerHTML = "";
	

	if(validateInput(input)) {
		for (var i = 1; i <= input; i++) {
			var listItem = document.createElement("li");
			
			if(i % 3 == 0 && i % 5 == 0) {
				listItem.innerHTML = "ping-pong";
			}
			else if(i % 3 == 0) {
				listItem.innerHTML = "ping";
			}
			else if(i % 5 == 0) {
				listItem.innerHTML = "pong";
			}
			else listItem.innerHTML = i;;

			resultList.appendChild(listItem);
		}
	}
	else {
		var error = document.createElement("li");
		error.innerHTML = "There was an error with your input, please enter a positive number!";
		resultList.appendChild(error);
	}
};


function validateInput(input) {
	//if no value is assigned or if input is less than or equal to 0, return false
	return input && input > 0
}

//add a listener to the button that executes pingPong on click
submitButton.addEventListener("click", pingPong);