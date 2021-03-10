/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } if (key === 'w') {
    console.log('Up!');
    connection.write('Move: up');
  } if (key === 'd') {
    console.log('right!')
    connection.write('Move: right');
  } if (key === 'a') {
    console.log('left');
    connection.write('Move: left');
  } if (key === 's') {
    console.log('down');
    connection.write('Move: down');
  } if (key === 'h') {
    connection.write(`Say: Wow!`);
  }
  //setup if key = w, write a comment up.
  //send move commands/directions
};

module.exports = setupInput;