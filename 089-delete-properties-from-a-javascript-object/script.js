// We can also delete properties from objects like this:

// Example:

// const ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"],
//   "bark": "bow-wow"
// };

// delete ourDog.bark;

// After the last line shown above, ourDog looks like:

// {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
// }

// TASK

// Delete the tails property from myDog. You may use either dot or bracket notation.

// Setup

const myDog = {
	name: "Happy Coder",
	legs: 4,
	tails: 1,
	friends: ["freeCodeCamp Campers"],
	bark: "woof",
};

delete myDog.tails;

console.log(myDog);
