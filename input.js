/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
let connect;

const setupInput = function(conn) {
  connect = conn;
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
    connect.write('Move: up');
  } if (key === 'd') {
    console.log('right!')
    connect.write('Move: right');
  } if (key === 'a') {
    console.log('left');
    connect.write('Move: left');
  } if (key === 's') {
    console.log('down');
    connect.write('Move: down');
  }
  //setup if key = w, write a comment up.
  //send move commands/directions
};

module.exports = setupInput;