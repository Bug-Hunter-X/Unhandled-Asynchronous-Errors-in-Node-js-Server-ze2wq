const http = require('http');

const server = http.createServer((req, res) => {
  someAsyncOperation().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  }).catch(error => {
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  const randomValue = Math.random();
  if (randomValue < 0.5) {
    throw new Error('Simulated asynchronous operation failed');
  }
  return Promise.resolve();
}