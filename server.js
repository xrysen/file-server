const net = require("net");
const fs = require("fs");

const server = net.createServer();

server.listen(3000, () => {
  console.log("Server listening on port 3000!");
});

server.on('connection', (client) => {
  console.log("New client connected!");

  client.setEncoding("utf8");
  client.write("Hello! What file can I get for you today? \n");
  client.on('data', (data) => {
    console.log("Recieved request for:", data);
  });
});