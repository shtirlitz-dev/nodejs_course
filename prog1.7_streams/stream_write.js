
/*
const fs = require('fs').promises;

(async () => {
    const sample = 'a string\n';
    await fs.writeFile('prog1.7_streams\\sample.txt', sample.repeat(100), {
        encoding: 'utf8',
        flag: 'w', // 'a' for append
        // mode: 0o666
    });
} )();
*/

/*
const fs = require('fs');

(async () => {
    const sample = 'a string\n';
    const fileStream = fs.createWriteStream('prog1.7_streams\\sample-stream.txt');
    for(let i = 0; i < 100; i++) {
        fileStream.write(sample);
    }
    fileStream.end();
} )();
*/

const fs = require('fs');

async function write(writable, data) {
    return new Promise(resolve => {
        const isReady = writable.write(data);
        if(isReady) {
            return resolve();
        }
        writable.once('drain', resolve);
    });
}

(async () => {
    const sample = 'a string\n';
    const fileStream = fs.createWriteStream('prog1.7_streams\\sample-stream2.txt');
    for(let i = 0; i < 100; i++) {
        await write(fileStream, sample);
    }
    fileStream.end();
} )();

