const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const port = 3001;

// const db = mysql.createPool({
//     host: "localhost",
//     port: "3310",
//     user: "root",
//     password: "12345",
//     database: "imdb_ijs",
//     connectionLimit: 10
// });

// USE
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

// GET
app.get('/query', (req, res) => {
    const data = '[{"id":0,"name":"#28","year":2002,"rank":null},{"id":1,"name":"#7 Train: An Immigrant Journey, The","year":2000,"rank":null},{"id":2,"name":"$","year":1971,"rank":6.4},{"id":3,"name":"$1,000 Reward","year":1913,"rank":null},{"id":4,"name":"$1,000 Reward","year":1915,"rank":null},{"id":5,"name":"$1,000 Reward","year":1923,"rank":null},{"id":6,"name":"$1,000,000 Duck","year":1971,"rank":5},{"id":7,"name":"$1,000,000 Reward, The","year":1920,"rank":null},{"id":8,"name":"$10,000 Under a Pillow","year":1921,"rank":null},{"id":9,"name":"$100,000","year":1915,"rank":null},{"id":10,"name":"$100,000 Pyramid, The","year":2001,"rank":null}]';
    res.send(data);
});

app.listen(port, () => {
    console.log("Running on Port " + port);
});