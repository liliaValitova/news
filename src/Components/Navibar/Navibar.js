import React from 'react';
import './Navibar.css';
import { NavLink } from 'react-router-dom';

const Navibar = () => {
    return (
        <header className='header'>
            <NavLink className='header_logo' to='/'>SHARETRADE.com</NavLink>
        </header>
    )
}

export default Navibar;