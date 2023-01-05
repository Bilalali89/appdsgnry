import React, {useEffect} from 'react';
import Link from 'next/link';
import AOS from 'aos';

const AboutQuoteSection = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div>
        <div className="aboutquote">
            <div className="container">
                <div className='slogan' data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
                DIVERSITY, EQUITY & INCLUSION
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="quote" data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
                        We believe in spending our time doing good things, and hope our clients do too. We’re proud to have worked with some amazing organisations who do amazing things. Here are just a few.
                        </div>

                    </div>
                    <div className="col-md-6">
                        <img src="/images/aboutus/group.png" alt="img" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="800"/>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default AboutQuoteSection