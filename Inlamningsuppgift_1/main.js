"use strict"
/* Emma Shakespeare AE6318*/

/**
Uppgift 1
===========
*/
console.log( 5 * 2  <= 12 );
console.log( 55 != 22 );
console.log( 16 / 4  == 4 );
console.log( 8 + 2 <  128 );
console.log( 32 * 8 > 255 );

/**
Uppgift 2
===========
*/
var one = "Tisdag";
var two = "Hamburgare";
var three = "I'll be back";
console.log(one.substring(0,3));
console.log(two.substring(3,10));
console.log(three.substring(5,12));

/**
Uppgift 3
===========
*/
console.log("It's learning".substring(5,13).toUpperCase());
console.log("Javascript: The Good Parts".substring(16, 26).toLowerCase());

/**
Uppgift 4
==========
*/
var numbers = [128, 256, 512, 1024, 2048];
console.log(numbers.toString());

var sumOfNumbers = 0;
var avgNumber = 0;
for (var i = 0; i < numbers.length; i++) {
  sumOfNumbers += numbers[i];
}
avgNumber = sumOfNumbers/numbers.length;

console.log(sumOfNumbers);
console.log(avgNumber);
numbers.push(sumOfNumbers);

console.log(numbers.toString());

/**
Uppgift 5
===========
*/

var countries = ["Sweden", "Denmark", "Finland", "Norway"];
var sum = 0;
console.log(countries[1].substring(0,3));
for (var i = 0; i < countries.length; i++) {
  sum += countries[i].length;
}
console.log(sum/countries.length);

/**
Uppgift 6
===========
*/

var values = [3, 5, "Jane", true, 144, false];
console.log(values.toString());
values.reverse();
console.log(values.toString());

/**
Uppgift 7
============
*/

var names = ["Jane", "Joe", "Eliza"];
var ages = [21, 34, 22];
var hasPet = [true, false, true];

var multipleArrays = names.concat(ages).concat(hasPet);
console.log(multipleArrays.toString());

/**
Uppgift 8
============
*/

var actors = ["Sherlock", "Watson", "Bo"];
var str = "";

for (var i = 0; i < actors.length; i++) {
  str += actors[i];
  if(i < actors.length -1)
  str += " - ";
}
console.log(str);

/**
Uppgift 9
===========
*/

var amount = Number(prompt("Ange ett värde: "));
if(amount < 50)
  console.log("Less than 50!");
else if(amount > 50 && amount < 65)//Here you probably should say >=
                                  //50 but the instructions doesn't say
  console.log("Optimal range for the amount!");
else
  console.log("Too Much");


/**
Uppgift 10
===========
*/

var str = "";
for (var i = 0; i < 8; i++) {
  str += "#";
  console.log(str);
}


























/**
*/
