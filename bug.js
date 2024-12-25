const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  someAsyncOperation().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  }).catch(error => {
    // This error is silently ignored. The server doesn't handle errors properly.
    console.error('Error:', error);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  // In a real application, this would be a database query, external API call, or file operation.
  const randomValue = Math.random();
  if (randomValue < 0.5) {
    throw new Error('Simulated asynchronous operation failed');
  }
  return Promise.resolve();
}