function findElement(arr, func) {
  /*  looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
  */  
  for(let item in arr) {
  	console.log("arr[item]: " + arr[item]);
  	console.log("func(arr[item]): " + func(arr[item]));
  	if(func(arr[item])) {
  		return arr[item];
  	}
  }
  return undefined;
}

// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));