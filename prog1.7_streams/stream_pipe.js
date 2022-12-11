const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req,res) => {
    // req is stream for reading, res is stream for writing
    fs.createReadStream('text-file.txt').pipe(res);
});

server.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})
