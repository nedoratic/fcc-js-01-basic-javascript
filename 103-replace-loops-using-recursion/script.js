// Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:

function multiply(arr, n) {
	let product = 1;
	for (let i = 0; i < n; i++) {
		product *= arr[i];
	}
	return product;
}

// However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.

function multiply(arr, n) {
	if (n <= 0) {
		return 1;
	} else {
		return multiply(arr, n - 1) * arr[n - 1];
	}
}

// The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0. At this point, all the functions can return and the original multiply returns the answer.

// Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.

// TASK

// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum(arr, n) {
	// Base case: if n is 0, the sum is 0
	if (n === 0) {
		return 0;
	} else {
		// Recursive case: sum the first (n-1) elements and add the nth element
		return sum(arr, n - 1) + arr[n - 1];
	}
}

console.log(sum([3, 4, 5, 6], 4));
// Output: 18

// 1. Function Call with sum([3, 4, 5, 6], 4)
// The function is called with an array [3, 4, 5, 6] and n = 4.
// The base case is not satisfied (n is not 0), so it proceeds to the else block.

// 2. Recursive Call sum([3, 4, 5, 6], 3)
// The function makes a recursive call with sum(arr, n - 1) where n - 1 = 3.
// It effectively calculates the sum of the first three elements of the array.

// 3. Recursive Call sum([3, 4, 5, 6], 2)
// Another recursive call is made with sum(arr, n - 1) where n - 1 = 2.
// It calculates the sum of the first two elements of the array.

// 4. Recursive Call sum([3, 4, 5, 6], 1)
// Another recursive call with sum(arr, n - 1) where n - 1 = 1.
// It calculates the sum of the first element of the array.

// 5. Base Case sum([3, 4, 5, 6], 0)
// The recursive calls continue until the base case is reached with n = 0.
// In this case, the base case returns 0.

// 6. Backtracking and Adding Values
// Now, the function starts backtracking and adding the results.
// sum([3, 4, 5, 6], 1) returns 3.
// sum([3, 4, 5, 6], 2) returns 3 + 4 = 7.
// sum([3, 4, 5, 6], 3) returns 7 + 5 = 12.
// Finally, sum([3, 4, 5, 6], 4) returns 12 + 6 = 18.

// So, the output of sum([3, 4, 5, 6], 4) is 18, which is the sum of all elements in the array. The function recursively adds the elements from the last one (index n-1) to the first one (index 0).
