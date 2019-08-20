// 9. async + await handle promise / asynchronous fn() in node (node 7 or highter)
const mod1 = require("mod1");

// 9.1 callbackFn() method
// mod1.fn1(data => {
//     console.log(data);
// });

// 9.2 async + await handle promise / asynchronous fn() in node (node 7 or highter)
// mod1.fn2().then(data => {
//     console.log(data);
// });

// 9.3 EventEmitter handle asynchronous fn() in node (need to import events.EventEmitter)
// mod1.fn3().on("process_start", (data) => {
//     console.log("process starts!");
//     console.log(data);
// });

// mod1.fn3().on("data_processed", data => {
//     console.log(data);
// });

// mod1.getData().on("start", data => {
//     console.log(data);
// });

// mod1.getData().on("process", data => {
//     console.log(data);
// })

// mod1.getData().on("complete", data => {
//     console.log(data);
// }) 

// async function getUserData() {
//     var userData = await mod1.getUser();
//     console.log(userData);
// }
// getUserData();

// 10. fs (file system) module: create file, write file, append file, read file, copy from one file to another
const fs = require("fs");
// fs.readFile("newfile.txt", "utf-8", (err, data) => {
//     if (!err) {
//         console.log(data);
//     }  
// })

// fs.writeFile("newfile.txt", "Giuseppe", "utf-8", err => {
//     if (!err) {
//         console.log('data written successfully');

//         fs.readFile("newfile.txt", "utf-8", (err, data) => {
//             if(!err) {
//                 console.log(data);
//             }

//         });
//     }
// });

// fs.open("newfile.txt", "a", (err, file) => {
//     if (!err) {
//         fs.write(file, " Verdi was an Italian composer of operas in 19th-century.", "utf-8", err => {
//             if (!err) {
//                 console.log('data append successfully');
//                 fs.readFile("newfile.txt", "utf-8", (err, data) => {
//                     if (!err) {
//                         console.log(data);
//                     }
//                 });
//             }
//         });
//     }
// });

// var text2write = "Antonio Vivaldi is one of the best baroque composers in 17th-century italy.";
// var text2append = " Giuseppe Verdi was an Italian composer of operas in 19th-century.";
// console.log("text2write: " + text2write);
// console.log("text2append: " + text2append);
// fs.writeFile("textFile.txt", text2write, "utf-8", err => {
//     if (!err) {
//         console.log("text written!");
//         fs.readFile("textFile.txt", "utf-8", (err, data) => {
//             if (!err) {
//                 console.log("read: " + data);
//             }
//         })

//         fs.open("textFile.txt", "a", (err, file) => {
//             if (!err) {
//                 fs.write(file, text2append, "utf-8", err => {
//                     if (!err) {
//                         console.log("text appended!");
//                         fs.readFile("textFile.txt", "utf-8", (err, data) => {
//                             if (!err) {
//                                 console.log("read: " + data);

//                             }
//                         });
//                     }
//                 });
//             }
//         });
//     }
// });

// var readStream = fs.createReadStream("stream.txt");
// readStream.setEncoding("utf-8");
// readStream.on("data", data => {
//     console.log("======================================================================");
//     console.log(data);
// })
// readStream.on("end", data => {
//     console.log("readStream complete!");
// })
// readStream.on("error", data => {
//     console.log("readStream error!");
// })

// var readStream = fs.createReadStream("stream.txt");
// readStream.setEncoding("utf-8");
// var writeStream = fs.createWriteStream("stream copy.txt");
// var pipe = readStream.pipe(writeStream);
// pipe.on("close", data => {
//     console.log("pipe completed");
// });

// 11. http request, create server within node runtime
const http = require("http");
http.createServer((req, res) => {
    // console.log(req.url);
    res.writeHead(200, { "Content-type": "text/html" })
    if (req.url == "/home") {
        res.end("home page says hi");
    } else if (req.url == "/profile") {
        res.end("profile page says hi");
    } else {
        res.end("<h1>hello from server</h1>");
    }
}).listen(3000, () => {
    console.log("server running @ localhost:3000");
});