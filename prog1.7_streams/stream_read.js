
/*
const fs = require('fs').promises;
(async () => {
    const content = await fs.readFile('prog1.7_streams\\stream_read.js');
    console.log(content.toString('hex'));
} )();
*/
const fs = require('fs');

(async () => {
    const fileStream = fs.createReadStream('prog1.7_streams\\stream_read.js');
    for await (const chunk of fileStream) {
        console.log(chunk.toString('hex'));
    }
} )();
