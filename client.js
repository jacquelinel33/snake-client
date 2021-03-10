
/**
 * Establishes connection with the game server
 */
const {IP, PORT} = require('./constants')
const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write('Name: JL');
  });
  //On incoming data, it will console.log to player
  conn.on('data', (data) => {
    console.log(data);
  });
  conn.on('end', () => {
    console.log('Session end');
  });
  return conn;
};

module.exports = connect;