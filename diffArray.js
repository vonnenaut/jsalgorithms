function diffArray(arr1, arr2) {
  /* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
  */
  let newArr = [];
  let arr1Copy = [...arr1];
  let arr2Copy = [...arr2];

  let arr1Items = arr1Copy.filter((el) => arr2Copy.indexOf(el) === -1);
  let arr2Items = arr2Copy.filter((el) => arr1Copy.indexOf(el) === -1);

  newArr = arr1Items.concat(arr2Items);

  return newArr;
}

console.log(diffArray([1, 2, 3, 5, 7, 8], [1, 2, 3, 4, 5]));