import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className='cicon'>
                                   <img src="/images/contact/Message.png" alt="icon" />
                                </div>
                                <h3>Send Us an Email</h3>
                                <p><a href="mailto:info@appdsngry.com">info@appdsgnry.com</a></p>
                                
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                 <div className='cicon'>
                                   <img src="/images/contact/Call.png" alt="icon" />
                                </div>
                                <h3>Give Us a call</h3>
                                <p>+1 66 3738 635 33</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                            <div className='cicon'>
                                   <img src="/images/contact/map.png" alt="icon" />
                                </div>
                                <h3>Address</h3>
                                <p>Strelley Hall, Main Street, Nottingham, Ng8 6Pe</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;