import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll } from 'react-scroll';

const Navbar = () => {
  return (
    <section id="header">
      <div className="header container">
        <nav className="nav-bar">
          <div class="brand">
            <Link to="/" className='log'>
              MMAP
            </Link>
          </div>
          <div className='nav-list'>
            <div class="hamburger" id="hamburger-menu">
              <div class="bar"></div>
            </div>
            <ul>
              <li><Link to="/" className='a'>Home</Link></li>
              <li><ScrollLink to="services" smooth={true} duration={500} className='a'>Services</ScrollLink></li>
              <li><Link to="/blog" className='a'>Blog</Link></li>
              <li><ScrollLink to="about" smooth={true} duration={500} className='a'>About</ScrollLink></li>
              <li><ScrollLink to="portfolio" smooth={true} duration={500} className='a'>Portfolio</ScrollLink></li>
              <li><ScrollLink to="contact" smooth={true} duration={500} className='a'>Contact</ScrollLink></li>
              <li><Link to="/login" className='a'>Login</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
