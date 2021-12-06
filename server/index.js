const express = require('express');
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

app.get('/', (req, res) => {
    
    const sqlQuery = "SELECT * FROM movies WHERE id = 99";
    db.query(sqlQuery, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        else {
            res.send(result);
        }
    })
    
});

app.listen(port, () => {
    console.log("Running on Port " + port);
});