function largestOfFour(arr) {
  let maxVal = Number.NEGATIVE_INFINITY;
  let newArr = [];

  for (let subArr in arr) {
  	console.log("###");
  	for (let value in arr[subArr]) {
  		console.log("arr[subArr][value]: " + arr[subArr][value]);
  	  if (arr[subArr][value] > maxVal) {
  	  	maxVal = arr[subArr][value];
  	  	console.log("maxVal: " + maxVal);
  	  }
  	} 
  	newArr.push(maxVal);
  	maxVal = Number.NEGATIVE_INFINITY;
  }
  console.log("##########");
  return newArr;
}

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));