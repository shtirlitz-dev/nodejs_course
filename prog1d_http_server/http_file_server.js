const http = require('http');
const EventEmitter = require('events')
const path = require('path')
const port = 3000;

const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://localhost:${port}` )

    const filePath = path.join(__dirname, 'public', url.pathname)
    try {
        console.log(filePath);
      //await fs.promises.access(filePath, fs.constants.R_OK);
      console.log('after access');
      //const fileInfo = await fs.promises.stat(filePath)
      console.log('after fileInfo');
      //const isFile = fileInfo.isFile()
      //if (!isFile) {
      //  throw new Error(`${filePath} is not a file`)
      //}
  
      res.setHeader('Content-Type', 'text/plain;charset=utf-8')
      fs
        .createReadStream(filePath)
        .on('error', err => {
          res.emit('error', err)
        })
        .pipe(res)
    } catch (err) {
      res.statusCode = 404
      res.end('Not found')
    }
  
    /*
    const fileName = path.join(__dirname, 'public', url.pathname)

    let isFile = false;
    try{
      isFile = fs.statSync(fileName).isFile();
    }
    catch(err) {
    }

    console.log('is file:', isFile, fileName);
    if(isFile) {
        res.statusCode = 200;
        if(fileName.endsWith('.pdf')) {
            res.setHeader('Content-Type', "application/pdf");
        }
        else {
            res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
        }
        //const content = fs.readFile(fileName);
        fs.createReadStream(fileName).pipe(res);
        //res.end('Hello World text file!');
      }
      else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain;charset=utf-8');
        res.end('Not found');
      }
  */
});

server. listen(port, () => {
    console. log(`Server is running at port ${port}`);
});