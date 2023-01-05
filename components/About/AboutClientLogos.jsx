import React, {useEffect} from 'react';
import Link from 'next/link';
import AOS from 'aos';

const AboutClientLogos = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div>
        <div className="clientlogosection">
            <div className="container">
                <div className="heading" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
                Good Work That Does Good !
                </div>
                <div className="subheading" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
                We believe in spending our time doing good things, and hope our clients do too. We’re proud to have worked with some amazing organisations who do amazing things. Here are just a few.
                </div>
            </div>
            <div className="container ptb-100 logos" data-aos="fade-up" data-aos-duration="600" data-aos-delay="800">
                <div className="row">
                    <div className="col-md-3 text-center">
                        <img src="/images/aboutus/redbull.png" alt="logo" />
                    </div>
                    <div className="col-md-3 text-center">
                        <img src="/images/aboutus/healthpod-logo.png" alt="logo" />
                    </div>
                    <div className="col-md-3 text-center">
                        <img src="/images/aboutus/va.png" alt="logo" />
                    </div>
                    <div className="col-md-3 text-center">
                        <img src="/images/aboutus/talent.png" alt="logo" />
                    </div>
                </div>
                <div className="row">
                     <div className="col-md-3 offset-md-2 text-center">
                        <img src="/images/aboutus/xuz.png" alt="logo" />
                    </div>
                    <div className="col-md-3 text-center">
                        <img src="/images/aboutus/telus.png" alt="logo" />
                    </div>
                    <div className="col-md-3 text-center">
                        <img src="/images/aboutus/gojilabs.png" alt="logo" />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutClientLogos