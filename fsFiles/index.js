const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8', (err, data) => {
 if(err) throw err;
 console.log(data);
});

// asynchronous
fs.writeFile(path.join(__dirname, 'files/filesCreate', 'reply.txt'), 
'Nice to meet you.', (err) => {
 if(err) throw err;
 console.log('write complete');
});

// exit on uncaught errors
process.on('uncaughtException', err => {
 console.log(`There was an uncaught error: ${err}`);
 process.exit(1);
});

// Synchronous 
try {
 fs.writeFileSync(path.join(__dirname, 'files/filesCreate', 'example.txt'), 
  'Hello, world!');
   console.log('File written successfully!');
}catch (err) {
  console.error('Error writing to file:', err);
}
// console.log('This will print after the file is written.');

// asynchronous
fs.appendFile(path.join(__dirname, 'files/filesCreate', 'test.txt'), 
 '\nTesting text.', (err) => {
  if(err) throw err;
  console.log('Append complete');
 });

 