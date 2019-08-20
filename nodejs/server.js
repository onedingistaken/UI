const express = require("express");
const app = express();
// ------------------------------------------------------------

// middleware functions act as a layer inbetween server and requests
// thus apply to all requests hitting server
// apply middleware to specify location for all static files
app.use(express.static("public"));
// 2 middlewares necessary in express framework/app to read value from a POST request
app.use(express.json()); // convert raw data to json format to be accessed as key-value pair
app.use(express.urlencoded({ extended: true }));

// custom middleware function
app.use((req, res, next) => {
    // console.log("request handled in custome middleware");
    next(); // without next() request'd stuck and won't proceed to the next process of queue
});

// configure routing to accept get request
app.get("/", (req, res) => {
    // res.send("hello from server"); // send data back to client
    // send html file to cliend
    res.sendFile(__dirname + '/index.html')
    // point to current working directory
});

app.get("/profile", (req, res) => {
    res.send("profile page says hi");
});

// send data from client to server, often use app.post
// app.get has limitations on data size and it gets exposed in url
// in url: req.params to get parameters ("../:k1/:k2")
// in url: req.query to get query string ?(k1=v1&k2=v2)
app.get("/userdata/:uId/:uName", (req, res) => {
    // url: http://localhost:3000/userdata/123/456789?uId=1&uName=user1
    // console.log(req.query); // { uId: '123', uName: '456789' }
    console.log(JSON.stringify(req.query)); // {"uid":"asd","uname":"lkj"}
    res.send(JSON.stringify(req.params)); // {"uId":"123","uName":"4567890"}
});

// app.post create route to receive user info
app.post("/saveuser", (req, res) => {
    console.log(req.body); // { username: 'asd', location: 'lkj' }
});

// catch invalid access
// put after all routing configures to redirect all wrong url access
app.use((req, res) => {
    res.redirect("/");
    // console.log("wrong access");
});

// ------------------------------------------------------------
app.listen(3000, () => {
    console.log("server running @ localhost:3000");
});