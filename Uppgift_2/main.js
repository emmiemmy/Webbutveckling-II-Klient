"use strict"

/*Emma Shakespeare, AE6318*/


/*Uppgift 1
============
*/

//Function that returns the largest value of two given
function max(num1, num2){
	if(num1 > num2){
		return num1;
	}else{
		return num2;
	}
}

//Fuction that returns the smallest value of two given
function min(num1, num2){
	if(num1 < num2){
		return num1;
	}
	else{
		return num2;
	}
}
console.log(max(5,10));
console.log(max(7,7));
console.log(min(12,24));
console.log(min(30,18));


/*Uppgift 2
============
*/
//Create array variable
var array = [];

//Create function that populates array with elements according to size given in parameters
function range(size){
	for (var i = 0; i < size; i++) {
		array[i] = i;
	}
	return array;
}

//Test function
var testArray = range(10);
console.log(testArray);

/*Uppgift 3
============
*/

//Create function that adds all numbers in array given in parameter and returns the result
function sum(array){
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	};
	return sum;
}

//Test function above
var numbers = [5, 10, 15, 20, 25];
var sumOfNumbers = sum(numbers);
console.log(sumOfNumbers);



/*Uppgift 4
============
*/

//Create function that counts number of matching character in string, both given in parameter
function countCharacter(str, letter){
	var count = 0;
	for (var i = 0; i < str.length; i++) {
		console.log(str[i]);
		if(str[i] == letter){
			count++;
			console.log("hit: " + str[i]);
		}
	};
	return count;
}

//Test function above
var testString1 = "Jane Doe";
var testString2 = "Abracadabra";

console.log("Number of hits: " + countCharacter(testString1, "e")); // => 2
console.log("Number of hits: " + countCharacter(testString2, "a")); // => 4 (obs. litet "a")


/*Uppgift 5
============
*/

/*Function takes a string as a parameter and tests if it reversed is identical and therfore a palindrome*/
function palindrome(str){
	//create a new stirng wcich is the reversed of the original and reverse it
	var newStr = str.split("").reverse().join("");
	console.log("The word \'" + str + "\' reversed is: \'" + newStr + "\'");
	for(var i = 0; i < newStr.length ;i++){
		if(newStr[i] == str[i]){
			console.log("Match! " + newStr[i] + " och " + str[i]);
		}
		else{
			console.log("Ej match " + newStr[i] + " och " + str[i]);
			return false;//If there is a mismatch the function returns false
		}
	}
	return true;
}

console.log(palindrome("sirap - paris"));
console.log(palindrome("lorem ipsum"));

/*Uppgift 6
============
*/
var person = {
	firstName:"Emma",
	lastName:"Shakespeare",
	age:32,
	family:"Ingrid, Klas, Karin, Malin"
};

/*Uppgift 7
============
*/

/*Function takes an object as parameter and prints its belonging attributes*/
function printPerson(obj){
	console.log(" Name: " + obj.firstName + " " + obj.lastName + "\n" + 
		" Age: " + obj.age + "\n" + 
		" Family members: " + obj.family);

};

printPerson(person);




/*Uppgift 8
============
*/

/* Function takes two parameters and returns an object containing theese values as attributes*/
function createBox(height, weight){
	var obj = {};
	obj.height = height;
	obj.weight = weight;
	return obj;
};

var box = createBox(15, 20);
console.log(box.height);
console.log(box.weight);



/*Uppgift 9
============
*/

function Triangle(height, width){
	this.height = height;
	this.width = width;
	this.area = function (){
		return height * width /2;
		};
	return this;

};

//Code below tests the function Triangle()
var tri = new Triangle(12, 14);

console.log(tri.height); // skickar tillbaka 12
console.log(tri.width); // skickar tillbaka 14
// Observera att vi anropar "area()"
console.log(tri.area()); // skickar tillbaka 84



/*Uppgift 10
============
*/

/* Function takes an object as parameter and returns its attributes names in an array.*/
function attributes(obj){
	var attr = [];

	for(var att in obj){
		attr.push(att);
	}
	return attr;
};




/*Code below to test function above; attributes()*/
var testObject1 = {
    width: 15,
    height: 20
};

var attrsFromObject1 = attributes(testObject1);
console.log(attrsFromObject1); // skickar tillbaka ["width", "height"]

var testObject2 = {
    a: 1,
    b: 2,
    c: 3
};

var attrsFromObject2 = attributes(testObject2);
console.log(attrsFromObject2); // skickar tillbaka ["a", "b", "c"]















