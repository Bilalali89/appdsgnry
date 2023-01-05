import React, {useEffect} from 'react';
import Link from 'next/link';
import AOS from 'aos';

const ContactHeadline = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
        <div className="contactheadline">
            <div className="container">
                <div className="heading" data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
                If you’re looking to invigorate your brand and ignite your marketing then we’d love to hear from you.
                </div>
                <span className='link' data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
                    <a href="#contact">Let's talk !</a>
                </span>

            </div>
        </div>
    </div>
  )
}

export default ContactHeadline