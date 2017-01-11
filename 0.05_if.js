
var isOn = true;
var isHot = true;

if (isOn === true){
	console.log("The light is one. It's too bright dude.");
}

if(isOn){
	console.log("Dude, turn that music off.");
}

// && = and

if(isOn && isHot){
	console.log("Dude, the music is on and it is so hot.")
}

// || = or

if(isOn || isHot){
	console.log("Dude, that music is on and NOT hot.");
}

// ! = not

if(!isHot){
	console.log("It is not hot.");
}