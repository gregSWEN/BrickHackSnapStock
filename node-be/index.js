// Entry Point of the API Server
const express = require('express');
const bodyParser = require('body-parser');
const {TestFirebase} = require('./firebaselib')
const {TestVeryfi} = require("./veryfiAPI");
const port = 8080;

const app = express();

TestFirebase()
const response = TestVeryfi('../receipt.pdf')

app.use(bodyParser.json());

app.get('/api/user', (req, res) => {



});

app.post('/api/user', (req, res) => {




})

app.get('/', (req,res) => {
    console.log(response)
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});