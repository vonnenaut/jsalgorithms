function mutation(arr) {
	/*  Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
	*/
	let arrCopy = [...arr];
	let searchArr = arrCopy[0].toLowerCase().split('');

	// get array of unique values to search for, all lowercase
	let searchTerms = arrCopy[1].toLowerCase().split('').filter(function(el, idx, self) {
		return self.indexOf(el) === idx;
	});
	// search for terms in string
	for (let idx = 0; idx < searchTerms.length; idx++) {
		if (!searchArr.includes(searchTerms[idx])) {
			return false;
		}
	}
	return true;
}

console.log("\nOutput: ", mutation(["hello", "hey"]), "\n");  // false
console.log("\nOutput: ", mutation(["hello", "hello"]), "\n"); // true
console.log("\nOutput: ", mutation(["Alien", "line"]), "\n"); // true
console.log("\nOutput: ", mutation(["Mary", "Army"]), "\n"); // true
console.log("\nOutput: ", mutation(["Mary", "Aarmy"]), "\n"); // true