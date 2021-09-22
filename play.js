
const connect = require('./client');
const setupInput = require('./input');
console.log('Connecting ...');
// connect();

// let connection = connect();
setupInput(connect());


//connect(); returns object (conn) that can be used to interact with server
//obj returned by connect() is passed into setupInput in the variable connection, which is globally scoped
//stdin event handler can interact with the server because scopr in the handler now includes both data from the keyboard and connection object