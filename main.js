const http = require('http');
const url = require('url');

const PORT = 3636;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    // Route: GET /api/hello
    if (req.method === 'GET' && parsedUrl.pathname === '/api/hello') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Hello from Node.js API!' }));
    } else {
        // Handle unknown routes
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not found' }));
    }
});

server.listen(PORT, () => {
    console.log(` Server running at http://localhost:${PORT}`);
});
