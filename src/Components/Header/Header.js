import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div>
                <Link to='Home'></Link>
            </div>
            <div>
                <Link to='About'>About Us</Link>
                <Link to='Services'>Services</Link>
            </div>
        </div>
    )
}

export default Header;