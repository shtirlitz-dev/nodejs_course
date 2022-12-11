const http = require('http')
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost`)
  console.log(url.href);
  console.log(process.cwd());

  const fileName = '.\\test' + url.pathname;
  res.setHeader('Content-Type', 'text/plain;charset=utf-8');

  let isFile = false;
  try{
    isFile = fs.statSync(fileName).isFile();
  }
  catch(err) {
  }

  console.log('is file:', isFile);
  if(isFile) {
      res.statusCode = 200;
      //const content = fs.readFile(fileName);
      //fs.createReadStream(fileName).pipe(res);
      res.end('Hello World text file!');
    }
    else {
      res.statusCode = 404;
      res.end('Not found');
    }
});

module.exports = { server }


