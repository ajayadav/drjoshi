import React from 'react'
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <div className='nav-header'>
            <div className='nav-home'>
                <Link to='Home'>
                </Link>
            </div>
            <div className='nav-links'>
                <Link to='About'>
                    <span>About Us</span>
                </Link>
                <Link to='Services'>
                    <span>Services</span>
                </Link>
                <Link to='Contact'>
                    <span>Contact Us</span>
                </Link>
            </div>
        </div>
    )
}

export default Header;