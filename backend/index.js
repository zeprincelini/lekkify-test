const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');

const api = require('./route/api');
const DB = require('./db/db');
DB();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 
app.use('/api', api);

app.listen(PORT, () => {
    console.log('running on port: ', PORT);
});