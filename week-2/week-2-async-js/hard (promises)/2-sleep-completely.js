/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    let promise = new Promise((resolve) => {
        let date = new Date();
        while(new Date().getTime() < date.getTime()+milliseconds){}
        resolve();
    })
    return promise;
}

// sleep(10);

module.exports = sleep;
