const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const person = require('./models/person');
const menuItem = require('./models/menuItem');
require ('dotenv').config();

app.get('/', function(req, res) {
    res.send('welcome to my hotel....');
});

//import Router file
const personRouter = require('./router/personRouter');
const menuItemRouter = require('./router/menuItemRouter')
app.use('/person', personRouter); //use router
app.use('/menu', menuItemRouter);  
                         

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('file live hai abhi port 3000');
});