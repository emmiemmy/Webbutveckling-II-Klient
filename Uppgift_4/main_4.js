"use strict"

/*Uppgift, Part1, 2 & 3
===========*/
//Find the form
var form = document.getElementById("search-form");

//Add listener to submit button
form.addEventListener("submit", function(e){

	//Prevent user to be forwarded
	e.preventDefault();

	//Fetch user input
	var movieTitle= this.elements.query.value;

	//If textfield is empty
	if(movieTitle.length < 1){
		alert("You haven't entered a movie title!");
	}else{

		//Fetch data from API
		requestData(movieTitle);

	}
});




/*Function creates a XMLHttpRequest to get data from recource*/
function requestData(movieTitle ){
	//Object to handle AJAX
	var request = new XMLHttpRequest();

	//The url ti retrieve the resource is built with user input
	var omdbURL = "http://omdbapi.com/?s="+movieTitle+"&type=movie";

	//When we have recieved a response...
	request.addEventListener("load", function(){
		//Log response status
		console.log("Recieved status: " + this.readyState + " : " + this.status);	

		//Parse the data
		var jsonObj = JSON.parse(this.responseText);
		
		//Check what we got
		console.log(jsonObj);
		var result = "";

		//No results, let user know with alert box
		//if(jsonObj.Search === undefined){
			if(jsonObj.Error == "Movie not found!"){
			alert(jsonObj.Error);
		}else{
			//Create string with desired data from recource, Title and year of release
			for(var i = 0; i < jsonObj.Search.length;i++){
				console.log(jsonObj.Search[i]);
				result += "<div class='well well-sm'>" + jsonObj.Search[i].Title + " ( " + 
				jsonObj.Search[i].Year + " )</div>";
			}

			displayResult(result);
		}




	});


	//Name what method and url we should send request to, true means asynchonous
	request.open("GET", omdbURL, true);

	//Send request
	request.send();

}

/*Function displays the result */
function displayResult(result){
	document.getElementById("result").innerHTML = result;
}


