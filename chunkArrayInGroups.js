function chunkArrayInGroups(arr, size) {
  /* splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. */
  // Break it up.
  let newArr = [];

  if(arr.length <= size) {
  	return arr;
  }  
  let arrCopy = [...arr];
  let newSubArr = [];
  // console.log("arrCopy: " + arrCopy);
  // console.log("size: " + size + '\n');
  	  
  while(arrCopy.length > 0) {
  	if(arrCopy.length >= size) {
  		newSubArr = arrCopy.splice(0,size);
  		// console.log("newSubArr: " + newSubArr);
  		// console.log(("newArr: " + newArr));
  	} else {
  		newSubArr = arrCopy;
  		arrCopy = [];
  	}
  	newArr.push(newSubArr);
  	// console.log("arrCopy: " + arrCopy);
  	// console.log("newArr: " + newArr);
  }
  return newArr;
}

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));