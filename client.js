
const {IP, PORT} = require('./constants')
const net = require('net');

/**
 * Establishes connection with the game server
 */
//creates an object conn that represents the connection you have with server. conn contains methods and properties that can be used to interact with the server. 
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