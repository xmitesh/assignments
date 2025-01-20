// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

// accessing file synchorously 
let content = fs.readFileSync('file.txt','utf-8' ,(err,data) => {
    if(err){
        throw new Error("file not accessed");   
    }
    else{
        return data ;
    }
});
console.log(content);
let t1 ;
let t2 ;
// accessing file asynchrounously 
t1 = performance.now();
fs.readFile('file.txt','utf-8' ,(err,data) => {
    
    if(err){
        throw new Error("file not accessed");   
    }
    else{
        console.log(data);
    }
    
});

let cnt = 0;

for (let index = 0; index < 1000000000; index++) {   // heavy operation will keep the thread busy and the async file function has to wait 
    cnt++;
} console.log(cnt);

t2 = performance.now();
console.log(t2-t1);