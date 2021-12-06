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
    const data = '[{"genre": "Romance", "rank": 9.0},{"genre": "Comedy", "rank": 8.0},{"genre": "Horror", "rank": 6.7},{"genre": "Adventure", "rank": 8.5},{"genre": "Suspense", "rank": 9.1},{"genre": "Fiction", "rank": 9.3}]';
    res.send(data);
});

app.listen(port, () => {
    console.log("Running on Port " + port);
});