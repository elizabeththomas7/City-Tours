import React from 'react';

function Header(){
    return(
        <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              home
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              about
            </a>
          </li>
          <li>
            <a href="/" className="nav-link active">
              tours
            </a>
          </li>
        </ul>
      </nav>
    );
}

export default Header;