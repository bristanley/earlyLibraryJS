function setline(){
	console.log("---------------")
}

var footballTeam = "Colts";

// for (i = 0; i < footballTeam.length; i++)

for (var letter in footballTeam) {
	console.log(footballTeam[letter]);
}

setline();

var myShow = "Game of Thrones"
for (var show in myShow) {
	console.log(myShow[show]);
}

setline();

var vowelCount = 0 
var favoriteFood = "Tofu"
for (letter in favoriteFood) {
	if (favoriteFood[letter].toLowerCase() === "a" || favoriteFood[letter].toLowerCase() === "e" || favoriteFood[letter].toLowerCase() === "i" || favoriteFood[letter].toLowerCase() === "o" || favoriteFood[letter].toLowerCase() === "u") {
	vowelCount++;	
	}
}
console.log("There are " + vowelCount + " vowels in " + favoriteFood);
