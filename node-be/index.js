// Entry Point of the API Server
const express = require('express');
const bodyParser = require('body-parser');
const {TestFirebase} = require('./firebaselib')
const port = 8080;

const app = express();

TestFirebase()

app.use(bodyParser.json());

app.get('/api/user', (req, res) => {



});

app.post('/api/user', (req, res) => {




})

app.get('/', (req,res) => {
    console.log("Hello Fam")
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});