const http = require("http");

const PORT = 3003;

const server = http.createServer((req, res) => {
  res.end(`Hello from Node ${PORT}`);
});

server.listen(PORT, () => {
  console.log(`Node running on ${PORT}`);
});