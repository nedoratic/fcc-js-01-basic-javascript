// If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:

const arr = [
	[1, 2],
	[3, 4],
	[5, 6],
];

for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
		console.log(arr[i][j]);
	}
}

// This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.

// TASK

// Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

function multiplyAll(arr) {
	let product = 1;
	for (let c = 0; c < arr.length; c++) {
		for (let d = 0; d < arr[c].length; d++) {
			product *= arr[c][d];
		}
	}
	return product;
}

console.log(multiplyAll([[1], [2], [3]]));

console.log(
	multiplyAll([
		[1, 2],
		[3, 4],
		[5, 6, 7],
	])
);

console.log(
	multiplyAll([
		[5, 1],
		[0.2, 4, 0.5],
		[3, 9],
	])
);
