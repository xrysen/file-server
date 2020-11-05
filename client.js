const net = require('net');
const readline = require('readline');
let question = "";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const conn = net.createConnection({
  host: 'localhost',
  port: 3000
});

conn.on('data', (data) => {
  rl.question(data, (answer) => {
    conn.write(answer);
    rl.close();
  })
});


conn.setEncoding("utf8");