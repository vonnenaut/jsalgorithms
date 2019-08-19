function factorialize(num) {
  // base case
  if (num == 1 || num == 0) {
  	return 1;
  // recursive case
  } else {
  	return num * factorialize(num-1);
  }  
}

console.log(factorialize(5));
console.log(factorialize(2));
console.log(factorialize(3));
console.log(factorialize(4));