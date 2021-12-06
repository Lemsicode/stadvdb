const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const port = 3001;

const db = mysql.createPool({
    host: "localhost",
    port: "3310",
    user: "root",
    password: "12345",
    database: "imdb_ijs",
    connectionLimit: 10
});

// USE
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

// GET
app.get('/query', (req, res) => {
    const sqlQuery = "SELECT * FROM movies WHERE id <= 5";
    db.query(sqlQuery, (err, result) => {
        if (err) {
            res.send(err);
            return;
        }
        res.send(result);
    })
});

app.listen(port, () => {
    console.log("Running on Port " + port);
});