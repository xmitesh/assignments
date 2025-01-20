// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman

const t1 = performance.now();

const fs = require('fs');

const data = fs.readFileSync('uncleanfile.txt','utf-8',(error,data) => {
    if (error){
        throw new Error("file not found!");
    }
    else{
        return data ;
    }
})

const content = data.split(" ").filter(element => element != '').join(' ');
fs.writeFile('cleanfile.txt',content,(error) => {
    if(error){ throw new Error("file error !");
    }else{
        console.log("file cleaned successfully");
    }
})



const t2 = performance.now(); 
console.log(t2-t1);