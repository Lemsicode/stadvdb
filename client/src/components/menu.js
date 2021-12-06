import React from 'react';
import '../styles/menu.css';
import logo from '../assets/imdb-logo.svg';

export default function Menu() {
	return(
    <div className="menu">
      <img src={logo} alt="IMDB Logo" className='logo' />
      <div className="genres">
        <button>Movies</button>
        <button>Directors</button>
        <button>Genres</button>
      </div>
    </div>
  );
} 