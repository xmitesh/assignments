/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0 ;
    let arr = ['a','e','i','o','u'];
    const strarr = str.toLowerCase().split("");
    console.log(strarr);
    strarr.forEach(element => {
      if(arr.includes(element)){count++;}
    });
    return count;
}
module.exports = countVowels;