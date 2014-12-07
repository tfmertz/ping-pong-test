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
//ping input
var pingText = document.getElementById("ping");
//pong input
var pongText = document.getElementById("pong");
//the list to output the results or errors
var resultList = document.getElementById("results");


//pingPong function calculates our results and displays them
var pingPong = function() {
	//grab the input from the input field
	var input = parseInt(inputText.value);
	var ping = parseInt(pingText.value);
	var pong = parseInt(pongText.value); 


	//clear out the list
	resultList.innerHTML = "";
	

	if(validateInput(input, ping, pong)) {

		//turn negatives into positives
		input = Math.abs(input);
		ping = Math.abs(ping);
		pong = Math.abs(pong);

		//swap ping and pong if ping greater than pong
		if (ping > pong) {
			var temp = ping;
			ping = pong;
			pong = temp;
		}

		//update the fields so the user knows what we did
		inputText.value = input;
		pingText.value = ping;
		pongText.value = pong;

		for (var i = 1; i <= input; i++) {
			var listItem = document.createElement("li");
			
			if(i % ping == 0 && i % pong == 0) {
				listItem.innerHTML = "ping-pong";
				listItem.className = "yellow";
			}
			else if(i % ping == 0) {
				listItem.innerHTML = "ping";
				listItem.className = "oj";
			}
			else if(i % pong == 0) {
				listItem.innerHTML = "pong";
				listItem.className = "blue";
			}
			else listItem.innerHTML = i;

			resultList.appendChild(listItem);
		}
	}
	else {
		var error = document.createElement("p");
		error.innerHTML = "Please enter positive numbers between 1 and 2500 (inclusive)!";
		error.className = "error";
		resultList.appendChild(error);
	}
};


function validateInput(input, ping, pong) {
	//if no value is assigned or if input is less than or equal to 0, return false
	return input && ping && pong && Math.abs(input) < 2501;
}

//add a listener to the button that executes pingPong on click
submitButton.addEventListener("click", pingPong);