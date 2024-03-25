//Streams 
const fs = require('fs');

const readStream = fs.createReadStream('./docs/iso1.txt',{encoding:'utf-8'});
const writeStream = fs.createWriteStream('./docs/iso3.txt');
readStream.on('data',chunk => {
    //console.log(chunk);
    writeStream.write(chunk);
});