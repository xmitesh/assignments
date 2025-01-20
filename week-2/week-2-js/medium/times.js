/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    const time = 0 ;
    const starttime = performance.now();
    let sum = 0;
    for (let i = 1; i <= n; i++) { sum += i;}
    const endtime = performance.now();
    return (endtime-starttime)/1000;
}

// Run the function for the given cases
console.log("Sum from 1-100 : " + calculateTime(100) + " sec");               // Sum from 1-100
console.log("Sum from 1-100000 : " + calculateTime(100000) + " sec");            // Sum from 1-100000
console.log("Sum from 1-1000000000 : " + calculateTime(1000000000) + " sec");        // Sum from 1-1000000000