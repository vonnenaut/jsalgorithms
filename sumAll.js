function sumAll(arr) {
/* We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.  The lowest number will not always come first. 
*/
  // sort array so lowest number comes first
  let sortedArr = arr.sort(function(a,b) {
  	return a - b;
  });
  console.log("sortedArr: " + sortedArr);

  let sum = sortedArr[1] + sortedArr[0];
  
  let diff = sortedArr[1] - sortedArr[0];
  console.log("diff: " + diff);

  for(let idx = sortedArr[0]+1; idx < sortedArr[1]; idx++) {
  	console.log("idx: " + idx);
  	sum += idx;
  }
  return sum;
}

// console.log(sumAll([1, 4])); // 10 expected
console.log(sumAll([5, 10])); // 45 expected