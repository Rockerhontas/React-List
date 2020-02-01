import React from 'react';
import "./navbar.scss";

export default function Navbar() {
    return  <nav className="navbar">
        <i class="fab fa-angrycreative fa-5x"></i>
    
       <ul className="nav-links">
           <li>
               <a href="/" className="nav-link">
                   Home
                   </a>
           </li>
           <li>
               <a href="/" className="nav-link">
                   About
                   </a>
           </li>
           <li>
               <a href="/" className="nav-link">
                   Kontakt
                   </a>
           </li>
           </ul>

        </nav>
}
