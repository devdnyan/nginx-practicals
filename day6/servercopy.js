const http = require("http");

const PORT = 3001;

const server = http.createServer((req, res) => {
  res.end(`Hello from Node inside Docker ${PORT}`);
});

server.listen(PORT, () => {
  console.log(`Node running on ${PORT}`);
});