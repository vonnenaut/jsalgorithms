function repeatStringNumTimes(str, num) {
  let newStr = '';
  for (let i = 1; i <= num; i++) {
  	newStr += str; 
  }
  return newStr;
}

console.log(repeatStringNumTimes("abc", 3));