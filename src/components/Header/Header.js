import React from 'react';
import logo from '../../images/barca.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
           <div className='logo'>
           <h1 className="title">Team PSG</h1>
           <img src={logo} alt=""/>
           </div>
           <nav>
               <a href="/latest">Latest</a>
               <a href="/schedule">Schedule</a>
               <a href="/results">Results</a>
               <a href="/players">Players</a>
               <a href="/photos">Photos</a>
               <a href="/standing">Salary</a>
               </nav>
        </div>
    );
};

export default Header;