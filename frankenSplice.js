function frankenSplice(arr1, arr2, n) {
	/* You are given two arrays and an index.

	Use the array methods slice and splice to copy each element of 	the first array into the second array, in order.
	
	Begin inserting elements at index n of the second array.

	Return the resulting array. The input arrays should remain the same after the function runs. */
	let arr1Copy = [...arr1];
	let arr2Copy = [...arr2];

	for (let idx = 0; idx < arr1.length; idx++) {
		let item = arr1Copy.slice(idx,idx+1);
		arr2Copy.splice(n, 0, item.pop());
		n += 1;
	}
	return arr2Copy;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));