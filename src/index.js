const express = require('express');
const app = express();

//SETUP READ ENV VARIABLE
const dotenv = require('dotenv');
dotenv.config();


const name = process.env.NAME || 'World';


app.get('/', (req, res) => {
    res.send(`Hello ${name}`);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Example app listening on port 3000! ' + name);
});
