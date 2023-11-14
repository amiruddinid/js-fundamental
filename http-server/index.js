const http = require('http');
const { PORT = 1234 } = process.env;

const fs = require('fs');
const path = require('path');
const PUBLIC_DIR = path.join(__dirname, 'public')

//html
// function onRequest(req, res){
//     const htmlFile = path.join(PUBLIC_DIR, 'index.html');
//     const html = fs.readFileSync(htmlFile, 'utf-8');
//     res.setHeader('Content-Type', 'text/html')
//     res.writeHead(200);
//     res.end(html)
// }

//json
function onRequest(req, res){
    const cars = {
        manufacture: 'Lamborghini',
        type:"Sesto Elemento"
    }
    const json = JSON.stringify(cars)
    res.setHeader('Content-Type', 'application/json')
    res.writeHead(200);
    res.end(json)
}

const server = http.createServer(onRequest)

server.listen(PORT, 'localhost', () => {
    console.log("Server sudah berjalan, silahkan buka http://localhost:%d", PORT);
})