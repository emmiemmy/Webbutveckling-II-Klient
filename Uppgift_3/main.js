"use strict"

/*Uppgift 1
============
*/


//set eventlisteners to all buttons
document.getElementById("error").addEventListener("click", setErrorStyle);	
document.getElementById("success").addEventListener("click", setSuccessStyle);
document.getElementById("info").addEventListener("click", setInfoStyle);

//store the element (message-box) in variable
var element = document.getElementById("message-box");

//functions to set styles
function setErrorStyle(){
	//document.getElementById("message-box").className="error";

	//to save code
	element.className="error";
}

function setSuccessStyle(){
	//document.getElementById("message-box").className="success";
	element.className="success";
}

function setInfoStyle(){
	//document.getElementById("message-box").className="info";
	element.className="info";
}



/*Uppgift 2
============
*/

//add listener
document.getElementById("add-item").addEventListener("click", addItemToList);

//function that lets user enter item and adds it to the list
function addItemToList(){
	var item = prompt("Enter your item below and press ok.");

	if(item != null){
		var node = document.createElement("LI");
		var textnode = document.createTextNode(item);
		node.appendChild(textnode);
		document.getElementById("list").appendChild(node);
	}


}



/*Uppgift 3
============
*/

//add listener
document.getElementById("remove-item").addEventListener("click", removeLastItem);

//Function removes last child ( the recently added item) from list
function removeLastItem(){
	var list = document.getElementById("list");
	var last = list.lastElementChild;
	list.removeChild(last);

}



/*Uppgift 4
============
*/

//get all buttons with this class name
var xButtons = document.getElementsByClassName("remove-list-item");

//set an eventListener to each button 
for(var i = 0; i < xButtons.length; i++){
	xButtons[i].addEventListener("click", function(){
		//remove this elements parentnode (<li>) from its parents parentnode (<ul>)
		this.parentNode.parentNode.removeChild(this.parentNode);
	})
}



/*Uppgift 5
============
*/

//Part 1
//Find the form
var form = document.getElementById("apply-for-pet");

//add listener to submit button
form.addEventListener("submit", function(e){
	//prevent us for being sent forward
	e.preventDefault();

	//Get values from form
	var first, last, age, email, pet;
	first = this.elements.firstname.value;
	last = this.elements.lastname.value;
	age = this.elements.age.value;
	email = this.elements.email.value;
	console.log(first);
	console.log(last);
	console.log(age);
	console.log(email);

	//to get the checked value from radiogroup
	var radios = document.getElementsByName('pet');

	//Go through all checkboxes to find out wich one is selected
	for (var i = 0; i < radios.length; i++) {
		if(radios[i].checked){
			pet = radios[i].value;
			console.log(pet)
		}
	};

	validateForm(first, last, age, email, pet);


});

function validateForm(first, last, age, email, pet){
	if(pet == undefined){
		alert("You haven't chosen a pet!");
	}
	else if(first.length < 1 || first.length > 50){
		alert("Firstname has to be between 1 and 50 characters!");

	}else if(last.length < 1 || last.length > 50){
		alert("Lastname has to be between 1 and 50 characters!");

	}else if(isNaN(age) || age < 1){
		alert("Not a valid age!")
	}else if(email.length < 1 || email.length > 50){
		alert("email-adress must be in 1 - 50 characters!");
	}else{
		alert("Well done " + first + ", your " + pet + " is on the way!");
		event.target.submit();
	}
	
	

}























