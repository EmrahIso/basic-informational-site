const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  // Request
  let path = './routes/';

  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/contact-me':
      path += 'contact-me.html';
      res.statusCode = 200;
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  // Response
  res.setHeader('Content-Type', 'text/html');

  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      return res.end('Internal Server Error');
    } else {
      res.end(data);
    }
  });
});

server.listen(8080, () => {
  console.log('listening for requests!');
});

server.on('connection', () => {
  console.log('new connection');
});

process.on('uncaughtException', (err) => {
  console.error(err);
  process.exit(1);
});
