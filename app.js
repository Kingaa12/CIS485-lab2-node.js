// Main application file 
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the HTTP response header with a 200 status code and content type
    res.writeHead(200, {'Content-Type': 'text/html'});
  
    // Send a response body
    res.end('<h1>Hello, World!</h1>');
  });
  
  // Define a port to listen to
  const port = 3000;
  
  // Make the server listen on port 3000
  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });

  