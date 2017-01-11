/*
var firstName = "Brian"
var age = 55
var message = firstName + ": " + 55

//console.log(firstName + ": " + 55) //JS is reading full console as a string
console.log(typeof age)
console.log(typeof message) //typeof tells you what it is ie. string, number, etc.

//quotes?
var greetings = 'Brian says "How\'s your day?"' // \  This is not the string you are looking for.
console.log(greetings)

// string method
console.log(greetings.length)
console.log(greetings.toUpperCase()) 
console.log(greetings.toLowerCase())

console.log(greetings.split(" "))
console.log(greetings.slice())
*/
//Challenge
var highSchoolName = "Pendleton Heights High School"
var gradDate = "2008"
var message = "I graduated from" + " " + highSchoolName + " " + "in" + " " + gradDate;
console.log(message)

var carMake = "Honda"
var carModel = "Fit"
var carYear = "2013"
var messageSilver = "I drive a" + " " + carYear + " " + carMake + " " + carModel;
console.log(messageSilver);



var age = 43
if (age < 18) {
	console.log("You are a minor");
} else {
	console.log("You are an adult")
}

