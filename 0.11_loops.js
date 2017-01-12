function setline(){
	console.log("----------------")
}


var name = "Brian Stanley"
console.log(name[1])

//to access the index we us[] and the index number inside of them
// DRY don't repeat everthing
// WET Write everything

console.log(name[1]);
console.log(name[0].toLowerCase() + name[1] + name[2] + name[3] + name[4]);
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);

var lcv = 0; //loop control variable
while(lcv < 15) { //(this is a conditional)
	console.log(name.toUpperCase());
	lcv += 1;
}

var count = 1

while (count < 10) {
	console.log(count);
	count ++;
}


 var num = 10

 while (num > 0) {  //writing with {} is code block
 	console.log(num);
 	num -= 1;
 }

setline();
 var evenCount = 0

 while (evenCount < 20) {
 	if (evenCount % 2 == 0){
 		console.log(evenCount + " is even");
 	} else {
 		console.log(evenCount + " is odd");
 	}
 	evenCount++;
 }


 setline();

 var countFive = 0;

 while (countFive <= 50) {
 	console.log(countFive);
 	countFive += 5;
 }