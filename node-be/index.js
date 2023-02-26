// Entry Point of the API Server
const express = require('express');
const bodyParser = require('body-parser');
const {TestFirebase} = require('./firebaselib')
const {TestVeryfi, ParseResponse} = require("./veryfiAPI");
const port = 8080;

const app = express();

TestFirebase()
const response = TestVeryfi('../receipt2.pdf')

app.use(bodyParser.json());

app.get('/api/user', (req, res) => {



});

app.post('/api/user', (req, res) => {



})

app.get('/', (req,res) => {
    const jsonR = ParseResponse(response)
    console.log(jsonR.line_items)
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});