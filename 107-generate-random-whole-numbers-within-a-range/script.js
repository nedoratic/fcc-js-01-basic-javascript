// You can generate a random whole number in the range from zero to a given number. You can also pick a different lower number for this range.

// You'll call your minimum number min and your maximum number max.

// This formula gives a random whole number in the range from min to max. Take a moment to read it and try to understand what this code is doing:

// Math.floor(Math.random() * (max - min + 1)) + min;

// Math.random(): This function generates a pseudo-random floating-point number in the range from 0 (inclusive) to 1 (exclusive). So, Math.random() alone would give you a random decimal number between 0 and 1.

// (max - min + 1): This part calculates the range of values you want. If you want random numbers between min and max (inclusive), you need to consider the entire range, hence the (max - min + 1).

// Math.random() * (max - min + 1): This multiplies the random decimal by the range, effectively scaling the random number to fit within the desired range.

// Math.floor(...): This rounds down the result of the multiplication to the nearest integer. This is important because Math.random() gives a floating-point number, and Math.floor ensures that the final result is an integer.

// + min: Finally, this part offsets the result by min, effectively shifting the range from starting at 0 to starting at min.

// In summary, the entire expression generates a random integer within the inclusive range [min, max].

// TASK

// Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin and less than or equal to myMax.

function randomRange(myMin, myMax) {
	return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(1, 10));
// This will produce a random integer between 1 and 10 (inclusive).

console.log(randomRange(1, 100));
// This will produce a random integer between 1 and 100 (inclusive).
