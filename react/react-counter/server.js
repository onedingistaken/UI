const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var count = 10;
app.get('/', (req, res) => {
    res.send({ count: count });
});
app.post('/', (req, res) => {
    count = req.body.count;
    console.log(req.body);
    res.send({
        status: 1,
        msg: "Product saved"
    });
});
app.listen(4000, () => {
    console.log('server running @localhost:4000')
});