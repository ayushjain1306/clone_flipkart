const http = require('http');
const connection  = require('./database/db.js');
const Router = require('./router/route.js');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', Router);

connection();

const PORT= process.env.port || 8000;

app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`);
})