const t1 = performance.now();

const fs = require('fs');


const cleanFile = (filePath) => {

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        const cleanedContent = data.replace(/\s+/g, ' ').trim();

        fs.writeFile(filePath, cleanedContent, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to the file:', err);
                return;
            }
            console.log('File cleaned successfully.');
        });
    });
};


const filePath = 'example.txt'; 
cleanFile(filePath);


const t2 = performance.now();
console.log(t2-t1);