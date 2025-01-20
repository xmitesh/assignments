// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

let str = "hey it's me , Batman "
fs.writeFile('data.txt',str,(error) => {
    if (error){ throw new Error("error hile writing to file");
    }else{console.log("file written successfully!");}
});

