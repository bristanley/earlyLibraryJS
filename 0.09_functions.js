//
function setline(){
	console.log("-------------------");
}
/*
function hello(){
	console.log("Hello World")
}

hello();

function helloNeighbor(name){
	if (name === "Brian") {
		return "Hey you're cool."
	} else {
		return "Hey you're not cool."
	}
}

//var addGreeting = helloNeighbor("Josh") + ", how are you doing today?";

console.log(helloNeighbor("Brian"));

//adding numbers to functions

function printNumber() {
	console.log(1);
}
printNumber();

function sumNum(plusFour) {
	var num1 = 4;
	console.log(num1 + plusFour);
}
sumNum(24);

function divNum(num1, num2) {
	return num1 / num2;
}
console.log(divNum(12, 4));
console.log("********");



function multNum() {
	var num1 = 4;
	var num2 = 6;
	console.log(num1 * num2);
}
multNum();


function calculatePriceIndiana(quantity, price){
	var tax = 0.07;
	var totaltax = quantity * price * tax;
	var totalPrice = totaltax * quantity * price;

	return totalPrice;
}
 console.log(calculatePriceIndiana(5, 5));

 //built in Objects example
 var today = new Date();
 console.log(today.toDateString());

 function checkOdd(num){
 	if (num % 2 === 0) {
 		return "Yo dawg, " + num + " is even";
 	} else {
 		return "nah dawg " + num + " it is odd";
 	}
 }
 console.log("*****************");
 console.log(checkOdd(12));

function divByThree(num){
	if(num % 3 === 0){
		return "It is divisible!"
	} else {
		return "It's isn't divisible!"
	}
}

console.log(divByThree(12));
*/

function dayOfTheWeek(day){
	if (day === "Monday"){
		console.log("Whatever..")
	} else {
		console.log("Is it Friday yet?")
	}
}

dayOfTheWeek("Tuesday");

setline();

function monthlyBills(rent, car, utilities){
	var monthlyTotal = rent + car + utilities;
	return monthlyTotal
}
console.log(monthlyBills(500, 200, 200));

setline();

function howMuchHotDogs(quantity, price, tax){
	//var tax = 0.07
	var totaltax = tax * quantity * price
	var totalPrice= totaltax * quantity * price
	return quantity + " hotdogs will cost you " + "$" + totalPrice
}

console.log(howMuchHotDogs(150, 1.00));

