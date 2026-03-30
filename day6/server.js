const http = require("http");

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  res.end(`Hello from Node inside Docker ${PORT}`);
});

server.listen(PORT, () => {
  console.log(`Node running on ${PORT}`);
});