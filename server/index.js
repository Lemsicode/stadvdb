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

    // const data = '[{"genre":"Short","rank":6.39425722142217},{"genre":"Documentary","rank":6.496829211219546},{"genre":"Crime","rank":5.860042134557994},{"genre":"Comedy","rank":5.905311078723612},{"genre":"Western","rank":5.651212937427017},{"genre":"Family","rank":6.315129585169254},{"genre":"Animation","rank":6.5578960418111025},{"genre":"Drama","rank":6.137847941268965},{"genre":"Romance","rank":6.156966660932025},{"genre":"Mystery","rank":5.932293869413231},{"genre":"Thriller","rank":5.527481210348945},{"genre":"Adult","rank":6.428048792408734},{"genre":"Music","rank":6.415911886216377},{"genre":"Action","rank":5.339820247971653},{"genre":"Fantasy","rank":5.848192781725125},{"genre":"Sci-Fi","rank":5.010578515362148},{"genre":"Horror","rank":4.756930180674216},{"genre":"War","rank":6.377797101269597},{"genre":"Musical","rank":6.087346762940679},{"genre":"Adventure","rank":5.5817167389546345},{"genre":"Film-Noir","rank":6.7017676806209066}]';
    // res.send(data);

    const sqlQuery = "SELECT movie_genre AS genre, AVG(movie_rank) as `Rank` FROM dimension_movies WHERE movie_genre IS NOT NULL GROUP BY movie_genre;";

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
