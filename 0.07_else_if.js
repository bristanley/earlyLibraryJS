/*
var age = 26;

if (age >= 21) {
	console.log("Bottoms up!");
} else if (age >= 18) {
	console.log("Get outta here YOUTH!");
} else if (age >= 25) {
	console.log("You can rent a car");
} else {
	console.log("You can not drink.");
}

//Challenge

var loggedIn = true
var userName = "Steve"
var userAdmin = "Brian"
var userManager = "Bob"
var userEmployee = "Jenna"

if (loggedIn) {
	console.log("You're logged in!");
} else {
	console.log("Please Sign In");
}


if (loggedIn && userAdmin) {
	console.log("This is the dashboard for your employee records. You have master control.")
} else if (loggedIn && userManager) {
	console.log("This is the dashboard for your employee records. You can only read but not create users.")
}else if (loggedIn && userEmployee) {
	console.log("Clock in and clock out please.")
}


var coltsWins = 3
var coltsLosses= 1
var patriotsWins= 1
var patriotsLosses = 3

if (coltsWins > patriotsWins) {
	console.log("Tom Brady is the worst.")
} else if (coltsWins < patriotsWins) {
	console.log("Playoff!? You want to talk about playoffs!?");
} else {
	console.log("Wins don't make Tom Brady any less a cheater!")
};

*/
var hope = prompt("How optimistic are you about next year for the Colts?")

if (hope == "1") {
	console.log("The season will go quicker with beer.");
} else if (hope == "2") {
	console.log("I feel ya man.");
} else if (hope == "3") {
	console.log("Don't worry it will get better.");
} else if (hope == "4") {
	console.log("You're a glass half full person. Good for you.");
} else if (hope == "5") {
	console.log("Huh. Did you see last season?");
} else {
	window.alert("Please enter a number 1 through 5");
}
