function findLongestWordLength(str) {
  let words = str.split(" ");
  let longest = '';

  for (let word in words) {
    if (words[word].length > longest.length) {
    	longest = words[word];
    }
  }
  let newStr = longest;
  return newStr.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));