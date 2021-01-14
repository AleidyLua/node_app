// 'use strict';
// const express = require('express');
const fs = require('fs')
const http = require('http');

// // Constants
const PORT = 8080;
// // // App
// // const app = express();
// // app.get('/', function (req, res) {
// //     res.send('Hello world\n');
// // });
// fs.readFile('/Users/macbook/WebstormProjects/appsettings.json', 'utf8' , (err, data) => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log(data)
// })
// // app.listen(PORT);



http.createServer(function (req, res) {
    fs.readFile('/Users/macbook/WebstormProjects/appsettings.json', function (err,data) {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
}).listen(PORT);
console.log('Running on http://localhost:' + PORT);