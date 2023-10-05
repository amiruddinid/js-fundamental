// Asynchronous
const fs = require("fs");
const option = { encoding: "utf-8" };
let data;

const callback = (err, data) => {
    console.log("Aku muncul kedua");
    if(err) return console.error("Error:", err.message);
    data = data
}

fs.readFile("contoh.txt", option, callback);

console.log(data);