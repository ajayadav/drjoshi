import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

const Footer = () => {
    return (
        <div className='jgc-footer'>
            <div className='jgc-social-media'>
                <a target='_blank' >
                    <i className='fab fa-facebook-f sm-icons'></i>
                </a>
                <a target='_blank' >
                    <i className='fab fa-linkedin-in sm-icons'></i>
                </a>
            </div>
            <div className='jgc-footer-social'>
                <Link to="Contact">
                    <div className='jgc-footer-btn'>
                        Contact
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Footer;