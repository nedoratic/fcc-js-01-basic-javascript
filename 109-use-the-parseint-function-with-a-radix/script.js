// The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

// The function call looks like:

// parseInt(string, radix);

// And here's an example:

// const a = parseInt("11", 2);

// The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.

// The radix is the base of a numeral system or the number of unique digits (including zero) used to represent numbers in a positional numeral system. In the context of the parseInt function in JavaScript, the radix is the base that is used to interpret the string.

// When you use parseInt(string, radix), the radix parameter specifies the base of the numeral system used in the provided string. It can be any integer from 2 to 36.

// Here are some common radices:

// Binary (base 2): 0, 1
// Octal (base 8): 0, 1, 2, 3, 4, 5, 6, 7
// Decimal (base 10): 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// Hexadecimal (base 16): 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F

// When you provide a radix, parseInt interprets the string accordingly.

// If you don't specify a radix, parseInt assumes base 10 by default.

// TASK

// Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.

function convertToInteger(str) {
	return parseInt(str, 2);
}

console.log(convertToInteger("10011"));
