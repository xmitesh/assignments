/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  let filteredstr = "";
  for (const x of str) {
    const isalpha = /^[A-Z]$/i.test(x);
    if(isalpha) {filteredstr += x.toLowerCase();}
  }
  console.log(filteredstr);
  
  let start = 0;
  let end = filteredstr.length-1;
  while(start<=end){
    if(filteredstr[start]!=filteredstr[end]) return false ;
    start++ ; end--;
  }
  return true;
}

// let ans = isPalindrome('Able, was I ere I saw Elba!');
// console.log(ans);


module.exports = isPalindrome;
