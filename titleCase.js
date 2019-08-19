function titleCase(str) {
/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of". 
*/
	let words = str.split(' ');
	
	for (let idx = 0; idx < words.length; idx++) {
		words[idx] = words[idx][0].toUpperCase() + words[idx].slice(1,words[idx].length).toLowerCase();
	}

	return words.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));