//let str = prompt("Please enter the string");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter the string: ', (str) => {
  console.log(`You entered: ${str}`);
  rl.close();
});