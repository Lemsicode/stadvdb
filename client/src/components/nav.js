import React, { useEffect } from 'react';

export default function Nav() {
  useEffect(() => {
    // Get all links
    const links = document.querySelectorAll('.nav-link');

    // Scroll to section when clicked
    links.forEach(link => {
      link.addEventListener('click', scrollToSection);
    })

    function scrollToSection(e) {
      e.preventDefault();
      
      const href = this.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop;

      links.forEach(link => {
        const navButton = link.firstChild;
        if (navButton.classList.contains('active')) navButton.classList.remove('active');
      });

      e.target.classList.add('active');

      window.scroll({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }, []);

	return(
    <nav className="navbar">
      <a href="#top-2004-movies" className='nav-link' title='Wow'>
        <div className="nav-button"></div>
      </a>
      <a href="#highest-rated-genres-2004" className='nav-link'>
        <div className="nav-button"></div>
      </a>
      <a href="#top-10-movies-war-genre-2004" className='nav-link'>
        <div className="nav-button"></div>
      </a>
      <a href="#actor-appearances" className='nav-link'>
        <div className="nav-button"></div>
      </a>
      <a href="#actor-appearances-male" className='nav-link'>
        <div className="nav-button"></div>
      </a>
      <a href="#actor-appearances-female" className='nav-link'>
        <div className="nav-button"></div>
      </a>
      <a href="#top-10-movies-all-time" className='nav-link'>
        <div className="nav-button"></div>
      </a>
      <a href="#highest-rated-genres-all-time" className='nav-link'>
        <div className="nav-button"></div>
      </a>
    </nav>
  )
}