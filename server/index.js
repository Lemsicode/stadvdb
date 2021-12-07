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

// GET TOP MOVIES IN 2004
app.get('/GET/top-2004-movie', (req, res) => {


    const data = '[{"Movie":"Dawn of the Friend","Rank":9.9},{"Movie":"Dimensia Minds Trilogy: The Reds","Rank":9.8},{"Movie":"Magical Time Traveling Thugtastic Jug, The","Rank":9.8},{"Movie":"Accordon","Rank":9.7},{"Movie":"Cashback","Rank":9.7},{"Movie":"Devils Are Dreaming","Rank":9.7},{"Movie":"Milton Is a Shitbag","Rank":9.7},{"Movie":"Sanhedrin","Rank":9.7},{"Movie":"Tomorrows Memoir","Rank":9.7},{"Movie":"Charlie the Ox","Rank":9.6}]';
    res.send(data);

    // const sqlQuery = "SELECT DISTINCT movie_name as `Movie`, movie_rank as `Rank` FROM dimension_movies WHERE movie_year = 2004 ORDER BY movie_rank DESC LIMIT 10;";

    // db.query(sqlQuery, (err, result) => {
    //     if (err) {
    //         res.send(err);
    //         return;
    //     }
    //     res.send(result);
    // })
});

// GET HIGHEST RATED GENRES IN 2004
app.get('/GET/highest-rated-genres-2004', (req, res) => {

    const data = '[{"Genre":"War","Rank":7.195000028610229},{"Genre":"Short","Rank":7.164233601876419},{"Genre":"Documentary","Rank":7.139449554845827},{"Genre":"Animation","Rank":6.358620660058383},{"Genre":"Drama","Rank":6.341276597469411},{"Genre":"Romance","Rank":6.233088239150889},{"Genre":"Sci-Fi","Rank":6.145945938857826},{"Genre":"Music","Rank":6.116666734218597},{"Genre":"Comedy","Rank":5.97277354648095},{"Genre":"Fantasy","Rank":5.9435897423670845},{"Genre":"Thriller","Rank":5.941379323498956},{"Genre":"Musical","Rank":5.906666644414266},{"Genre":"Mystery","Rank":5.825000030653817},{"Genre":"Action","Rank":5.819999993840853},{"Genre":"Western","Rank":5.800000071525574},{"Genre":"Crime","Rank":5.716666680393797},{"Genre":"Horror","Rank":5.594202888184699},{"Genre":"Adventure","Rank":5.385714279753821},{"Genre":"Family","Rank":5.216666665342119}]';
    res.send(data);

    // const sqlQuery = "SELECT movie_genre AS `Genre`, AVG(movie_rank) AS `Rank` FROM dimension_movies WHERE movie_year = 2004 AND movie_genre IS NOT NULL AND movie_rank IS NOT NULL GROUP BY movie_genre ORDER BY `Rank` DESC;";

    // db.query(sqlQuery, (err, result) => {
    //     if (err) {
    //         res.send(err);
    //         return;
    //     }
    //     res.send(result);
    // })
});

// GET ACTOR APPEARANCES
app.get('/GET/actor-appearances', (req, res) => {

    const data = '[{"first_name":"Mel","last_name":"Blanc","gender":"M","count":909},{"first_name":"Bess","last_name":"Flowers","gender":"F","count":672},{"first_name":"Tom","last_name":"London","gender":"M","count":549},{"first_name":"Adoor","last_name":"Bhasi","gender":"M","count":544},{"first_name":"Edmund","last_name":"Cobb","gender":"M","count":544},{"first_name":"Bud","last_name":"Osborne","gender":"M","count":544},{"first_name":"Lee","last_name":"Phelps","gender":"M","count":543},{"first_name":"Prem","last_name":"Nazir","gender":"M","count":498},{"first_name":"Oliver","last_name":"Hardy","gender":"M","count":450},{"first_name":"Emmett","last_name":"Vogan","gender":"M","count":447}]';
    res.send(data);

    // const sqlQuery = "SELECT a.first_name, a.last_name, a. gender, fa.count FROM fact_actors fa LEFT JOIN actors a ON fa.actor_id = a.id ORDER BY count desc LIMIT 10;";

    // db.query(sqlQuery, (err, result) => {
    //     if (err) {
    //         res.send(err);
    //         return;
    //     }
    //     res.send(result);
    // })
});

// GET MALE ACTOR APPEARANCES
app.get('/GET/actor-appearances-male', (req, res) => {

    const data = '[{"first_name":"Mel","last_name":"Blanc","count":909},{"first_name":"Tom","last_name":"London","count":549},{"first_name":"Adoor","last_name":"Bhasi","count":544},{"first_name":"Edmund","last_name":"Cobb","count":544},{"first_name":"Bud","last_name":"Osborne","count":544},{"first_name":"Lee","last_name":"Phelps","count":543},{"first_name":"Prem","last_name":"Nazir","count":498},{"first_name":"Oliver","last_name":"Hardy","count":450},{"first_name":"Emmett","last_name":"Vogan","count":447},{"first_name":"Frank (I)","last_name":"Ellis","count":446}]';
    res.send(data);

    // const sqlQuery = "SELECT a.first_name, a.last_name, fa.count FROM fact_actors fa LEFT JOIN actors a ON fa.actor_id = a.id WHERE gender = 'M' ORDER BY count desc LIMIT 10;";

    // db.query(sqlQuery, (err, result) => {
    //     if (err) {
    //         res.send(err);
    //         return;
    //     }
    //     res.send(result);
    // })
});

// GET FEMALE ACTOR APPEARANCES
app.get('/GET/actor-appearances-female', (req, res) => {

    const data = '[{"first_name":"Bess","last_name":"Flowers","count":672},{"first_name":"Lalita","last_name":"Pawar","count":332},{"first_name":"Mae","last_name":"Questel","count":329},{"first_name":"Claire","last_name":"McDowell","count":307},{"first_name":"Usha","last_name":"Sharabhai","count":307},{"first_name":"Bunsri","last_name":"Sribunruttanachai","count":306},{"first_name":"Florence","last_name":"Lawrence","count":295},{"first_name":"Nirupa","last_name":"Roy","count":284},{"first_name":"Mary","last_name":"Pickford","count":283},{"first_name":"Renu","last_name":"Pandey","count":281}]';
    res.send(data);

    // const sqlQuery = "SELECT a.first_name, a.last_name, fa.count FROM fact_actors fa LEFT JOIN actors a ON fa.actor_id = a.id WHERE gender = 'F' ORDER BY count desc LIMIT 10;";

    // db.query(sqlQuery, (err, result) => {
    //     if (err) {
    //         res.send(err);
    //         return;
    //     }
    //     res.send(result);
    // })
});

// GET TOP 10 MOVIES OF ALL TIME
app.get('/GET/top-10-movies-all-time', (req, res) => {

    const data = '[{"movie_name":"Atunci i-am condamnat pe toti la moarte","movie_year":1971,"movie_rank":9.9},{"movie_name":"Blow Job","movie_year":2002,"movie_rank":9.9},{"movie_name":"Clearing, The","movie_year":2001,"movie_rank":9.9},{"movie_name":"Complex Sessions, The","movie_year":1994,"movie_rank":9.9},{"movie_name":"Dawn of the Friend","movie_year":2004,"movie_rank":9.9},{"movie_name":"Devils Circus, The","movie_year":1926,"movie_rank":9.9},{"movie_name":"Distinto amanecer","movie_year":1943,"movie_rank":9.9},{"movie_name":"Dosti","movie_year":1964,"movie_rank":9.9},{"movie_name":"Duck Soup","movie_year":1942,"movie_rank":9.9},{"movie_name":"Duminica la ora 6","movie_year":1965,"movie_rank":9.9}]';
    res.send(data);

    // const sqlQuery = "SELECT DISTINCT movie_name, movie_year, movie_rank FROM dimension_movies ORDER BY movie_rank DESC LIMIT 10;";
    
    // db.query(sqlQuery, (err, result) => {
    //     if (err) {
    //         res.send(err);
    //         return;
    //     }
    //     res.send(result);
    // })
});

// GET HIGHEST RATED GENRES OF ALL TIIME
app.get('/GET/highest-rated-genres', (req, res) => {

    const data = '[{"Genre":"Film-Noir","Rank":6.7017676806209066},{"Genre":"Animation","Rank":6.5578960418111025},{"Genre":"Documentary","Rank":6.496829211219546},{"Genre":"Adult","Rank":6.428048792408734},{"Genre":"Music","Rank":6.415911886216377},{"Genre":"Short","Rank":6.39425722142217},{"Genre":"War","Rank":6.377797101269597},{"Genre":"Family","Rank":6.315129585169254},{"Genre":"Romance","Rank":6.156966660932025},{"Genre":"Drama","Rank":6.137847941268965},{"Genre":"Musical","Rank":6.087346762940679},{"Genre":"Mystery","Rank":5.932293869413231},{"Genre":"Comedy","Rank":5.905311078723612},{"Genre":"Crime","Rank":5.860042134557994},{"Genre":"Fantasy","Rank":5.848192781725125},{"Genre":"Western","Rank":5.651212937427017},{"Genre":"Adventure","Rank":5.5817167389546345},{"Genre":"Thriller","Rank":5.527481210348945},{"Genre":"Action","Rank":5.339820247971653},{"Genre":"Sci-Fi","Rank":5.010578515362148},{"Genre":"Horror","Rank":4.756930180674216}]';
    res.send(data);
    
    // const sqlQuery = "SELECT movie_genre AS 'Genre', AVG(movie_rank) AS `Rank` FROM dimension_movies WHERE movie_genre IS NOT NULL GROUP BY movie_genre ORDER BY `Rank` DESC;";
    
    // db.query(sqlQuery, (err, result) => {
    //     if (err) {
    //         res.send(err);
    //         return;
    //     }
    //     res.send(result);
    // })
});

// GET TOP 10 MOVIES WAR GENRE 2004
app.get('/GET/top-10-movies-war-genre-2004', (req, res) => {

    const data = '[{"movie_name":"Night Demons","movie_rank":9},{"movie_name":"Bab el shams","movie_rank":8.8},{"movie_name":"R Point","movie_rank":8.4},{"movie_name":"Untergang, Der","movie_rank":8.3},{"movie_name":"Nema problema","movie_rank":8.2},{"movie_name":"Duga mracna noc","movie_rank":8.1},{"movie_name":"Svoi","movie_rank":8},{"movie_name":"Hotel Rwanda","movie_rank":8},{"movie_name":"Taegukgi hwinalrimyeo","movie_rank":7.9},{"movie_name":"Fahrenheit 9/11","movie_rank":7.8}]';
    res.send(data);

    // const sqlQuery = "SELECT movie_name, movie_rank FROM dimension_movies WHERE movie_year = 2004 AND movie_genre = 'War' ORDER BY movie_rank DESC LIMIT 10;";
    
    // db.query(sqlQuery, (err, result) => {
    //     if (err) {
    //         res.send(err);
    //         return;
    //     }
    //     res.send(result);
    // })
});

app.listen(port, () => {
    console.log("Running on Port " + port);
});
