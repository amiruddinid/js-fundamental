const os = require('os');
// require untuk import
// import from harus menggunakan esm
const luasSegitiga = require('./segitiga')

// babeljs untuk compile ecma script modern
// import os from 'os';
// import luasSegitiga from '../segitiga';

console.log("Free Memory", os.freemem())
console.log(luasSegitiga(4, 2));