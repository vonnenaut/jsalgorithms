function confirmEnding(str, target) {
  console.log("str: " + str);
  console.log("target: " + target);
  let subStr = str.substring((str.length-target.length),(str.length));
  console.log("subStr: " + subStr);
  if (subStr == target) {
  	return true;
  } else {
  	return false;
  }
}

console.log(confirmEnding("Bastian", "n"));