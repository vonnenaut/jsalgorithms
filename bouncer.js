function bouncer(arr) {
	/* Remove all falsy values from an array.
	Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.	 Hint: Try converting each value to a Boolean.
	*/
  	let arrCopy = [...arr];

  	var filteredArr = arrCopy.filter(function (el) {
  		return Boolean(el) === true;
  	});
  	return filteredArr;
}

console.log(bouncer([7, "ate", "", false, 9]));