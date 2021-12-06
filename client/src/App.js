import React from "react";
import Genre2000 from './components/hi-genre-2000';
import Top2000Movies from './components/top-2000-movie';
import PopularMovieGenre from "./components/popular-movie-genre";
import TopDirectors from "./components/top-movie-directors";
import AverageDirectorMovies from "./components/avg-rate-direk-movies";
import AverageMovieGenres from "./components/avg-rate-movies-genre";
import './styles/App.css';

export default function App() {
  return (
    <div className="App">
      <Top2000Movies />
      <Genre2000 />
      <PopularMovieGenre />
      <TopDirectors />
      <AverageDirectorMovies />
      <AverageMovieGenres />
    </div>
  );
}