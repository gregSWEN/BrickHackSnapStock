// Entry Point of the API Server
const express = require('express');
const bodyParser = require('body-parser');
const port = 8080;

const app = express();

const users = [];

app.use(bodyParser.json());

app.get('/api/user', (req, res) => {
    console.log("Testing works")
    res.json(users);
});

app.post('/api/user', (req, res) => {
    const user = req.body.user;
    users.push(user);
    res.json("user added");
});

app.get('/', (req,res) => {
    res.send('App Works !!!!');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});