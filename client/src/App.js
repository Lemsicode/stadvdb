import React from "react";
import HighestRatedGenres2004 from './components/highest-rated-genres-2004';
import Top2004Movies from './components/top-2004-movies';
import ActorAppearances from "./components/actor-apperances";
import ActorAppearancesMale from "./components/actor-appearances-male";
import ActorAppearancesFemale from "./components/actor-appearances-female";

import Top10MoviesAllTime from "./components/top-10-movies-all-time";
import HighestRatedGenresAllTime from "./components/highest-rated-genres";

import Top10MoviesWarGenre2004 from "./components/Top-10-Movies-War-Genre-2004";
import './styles/App.css';
import Nav from "./components/nav";

export default function App() {
  return (
    <div className="App">
      <Nav />

      <Top2004Movies />
      <HighestRatedGenres2004 />
      <Top10MoviesWarGenre2004 />

      <ActorAppearances />
      <ActorAppearancesMale />
      <ActorAppearancesFemale />
      
      <Top10MoviesAllTime />
      <HighestRatedGenresAllTime />
    </div>
  );
}