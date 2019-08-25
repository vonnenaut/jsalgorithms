function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  var arrCopy = [...arr];

  for(let idx = 0; idx < arrCopy.length; idx++) {
  	for (let jdx = 0; jdx < args.length; jdx++) {
  		if (arrCopy[idx] === args[jdx]) {
  			delete arrCopy[idx];
  		}
  	}
  }
  return arrCopy.filter(Boolean);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));