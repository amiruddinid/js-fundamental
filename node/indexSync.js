const fs = require("fs");
const option = { encoding: "utf-8" };

console.log("Aku muncul pertama");
const data = fs.readFileSync("contoh.txt", option);
console.log("Isi File:", data);

console.log("Aku muncul ketiga");