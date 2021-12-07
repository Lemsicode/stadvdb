const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const port = 3001;

//EDIT DATABASE CONNECTION DETAILS
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

// GET TOP MOVIES IN 2004
app.get('/GET/top-2004-movie', (req, res) => {

    const sqlQuery = "SELECT DISTINCT movie_name as `Movie`, movie_rank as `Rank` FROM dimension_movies WHERE movie_year = 2004 ORDER BY movie_rank DESC LIMIT 10;";

    db.query(sqlQuery, (err, result) => {
        if (err) {
            res.send(err);
            return;
        }
        res.send(result);
    })
});

// GET HIGHEST RATED GENRES IN 2004
app.get('/GET/highest-rated-genres-2004', (req, res) => {

    const sqlQuery = "SELECT movie_genre AS `Genre`, AVG(movie_rank) AS `Rank` FROM dimension_movies WHERE movie_year = 2004 AND movie_genre IS NOT NULL AND movie_rank IS NOT NULL GROUP BY movie_genre ORDER BY `Rank` DESC;";

    db.query(sqlQuery, (err, result) => {
        if (err) {
            res.send(err);
            return;
        }
        res.send(result);
    })
});

// GET ACTOR APPEARANCES
app.get('/GET/actor-appearances', (req, res) => {

    const sqlQuery = "SELECT a.first_name, a.last_name, a. gender, fa.count FROM fact_actors fa LEFT JOIN actors a ON fa.actor_id = a.id ORDER BY count desc LIMIT 10;";

    db.query(sqlQuery, (err, result) => {
        if (err) {
            res.send(err);
            return;
        }
        res.send(result);
    })
});

// GET MALE ACTOR APPEARANCES
app.get('/GET/actor-appearances-male', (req, res) => {

    const sqlQuery = "SELECT a.first_name, a.last_name, fa.count FROM fact_actors fa LEFT JOIN actors a ON fa.actor_id = a.id WHERE gender = 'M' ORDER BY count desc LIMIT 10;";

    db.query(sqlQuery, (err, result) => {
        if (err) {
            res.send(err);
            return;
        }
        res.send(result);
    })
});

// GET FEMALE ACTOR APPEARANCES
app.get('/GET/actor-appearances-female', (req, res) => {

    const sqlQuery = "SELECT a.first_name, a.last_name, fa.count FROM fact_actors fa LEFT JOIN actors a ON fa.actor_id = a.id WHERE gender = 'F' ORDER BY count desc LIMIT 10;";

    db.query(sqlQuery, (err, result) => {
        if (err) {
            res.send(err);
            return;
        }
        res.send(result);
    })
});

// GET TOP 10 MOVIES OF ALL TIME
app.get('/GET/top-10-movies-all-time', (req, res) => {

    const sqlQuery = "SELECT DISTINCT movie_name, movie_year, movie_rank FROM dimension_movies ORDER BY movie_rank DESC LIMIT 10;";
    
    db.query(sqlQuery, (err, result) => {
        if (err) {
            res.send(err);
            return;
        }
        res.send(result);
    })
});

// GET HIGHEST RATED GENRES OF ALL TIIME
app.get('/GET/highest-rated-genres', (req, res) => {
    
    const sqlQuery = "SELECT movie_genre AS 'Genre', AVG(movie_rank) AS `Rank` FROM dimension_movies WHERE movie_genre IS NOT NULL GROUP BY movie_genre ORDER BY `Rank` DESC;";
    
    db.query(sqlQuery, (err, result) => {
        if (err) {
            res.send(err);
            return;
        }
        res.send(result);
    })
});

// GET TOP 10 MOVIES WAR GENRE 2004
app.get('/GET/top-10-movies-war-genre-2004', (req, res) => {

    const sqlQuery = "SELECT movie_name, movie_rank FROM dimension_movies WHERE movie_year = 2004 AND movie_genre = 'War' ORDER BY movie_rank DESC LIMIT 10;";
    
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
