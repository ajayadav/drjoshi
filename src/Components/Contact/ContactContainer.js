import React from 'react';

import './contact.css';
import ContactForm from './ContactForm';

const ContactContainer = () => {
    return (
        <div className='jgc-contact'>
            <div className='jgc-contact-container'>
                <div className='jgc-contact-left-section'>

                </div>
                <div className='jgc-contact-right-section'>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default ContactContainer;