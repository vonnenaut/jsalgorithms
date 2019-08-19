function mutation(arr) {
	/*  Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

	For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

	The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

	Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
	*/
	let arrCopy = [...arr];
	let searchArr = arrCopy[0].toLowerCase().split('');

	// get array of unique values to search for
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