console.log('Hello world');

// console.log(global);

const os = require('os');
const path = require('path');
const math = require('./math');
const { multiply, subtract, divide } = require('./math');

console.log(math.add(3, 2));
console.log(subtract(3, 2));
console.log(multiply(2, 3));
console.log(divide(3, 2));

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
if(path.extname(__filename) === '.js'){
 console.log("file is javascript file.")
}
console.log(path.extname(__filename));


