function booWho(bool) {
  /* Check if a value is classified as a boolean primitive. Return true or false. 
  */
  let boolCheck = typeof bool;
  if (typeof bool === "boolean") {
  	return true;
  } else {
  	return false;
  }
}

console.log(booWho(null));
console.log(booWho(true));
console.log(booWho(false));
console.log(booWho(NaN));
console.log(booWho(undefined));
console.log(booWho("a string"));
console.log(booWho(7));
console.log(booWho(new Object()));
