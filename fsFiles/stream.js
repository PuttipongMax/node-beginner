const fs = require('fs');

const rs = fs.createReadStream('./files/lorem.txt', {encoding: 'utf8' });

const ws = fs.createWriteStream('./files/filesCreate/new-lorem.json');

rs.on('data', (dataChunk) => {
 ws.write(dataChunk);
})