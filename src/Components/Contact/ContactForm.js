import React from 'react';

const ContactForm = () => {
    return (
        <div className='jgc-contact-form'>
            <div className="">
                <div >
                    <input id="jgc-contact-name"  type="text" className="" name="wpforms[fields][0]" placeholder="Name" required="" />
                    <label className="label-hidden" htmlFor="jgc-contact-message">This field is required.</label>
                </div>
                <div >
                    <input id="jgc-contact-mail"  type="email"  className="" name="wpforms[fields][1]" placeholder="Email Address" required="" />
                    <label className="label-hidden" htmlFor="jgc-contact-message">This field is required.</label>
                </div>
                <div >
                    <input id="jgc-contact-subject"  type="text" className="" name="wpforms[fields][3]" placeholder="Subject" required="" />
                    <label className="label-hidden" htmlFor="jgc-contact-message">This field is required.</label>
                </div>
                <div >
                    <textarea id="jgc-contact-message" className="" name="wpforms[fields][2]" placeholder="Your Message" required=""></textarea>
                    <label  className="label-hidden" htmlFor="jgc-contact-message">This field is required.</label>
                </div>
            </div>
            <div className="wpforms-submit-container">
                <input type="button" name="wpforms[submit]" className="wpforms-submit" value="Submit"/>
            </div>
        </div>
    )
}

export default ContactForm;