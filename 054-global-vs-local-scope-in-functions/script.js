// It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

// In this example:

const someVar = "Hat";

console.log(someVar);

function myFun() {
	const someVar = "Head";
	return someVar;
}

console.log(myFun());

console.log(someVar);

// The function myFun will return the string Head because the local version of the variable is present.

// TASK

// Add a local variable to myOutfit function to override the value of outerWear with the string sweater.

// Setup

const outerWear = "T-Shirt";

console.log(outerWear);

function myOutfit() {
	const outerWear = "sweater";
	return outerWear;
}

console.log(myOutfit());

console.log(outerWear);
