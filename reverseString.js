function reverseString(str) {
  let charArr = str.split('');
  console.log(charArr);
  let newArr = [];
  while (charArr.length > 0) {
    newArr.push(charArr.pop());
  }
  str = newArr.join('');
  return str;
}

console.log(reverseString("hello"));