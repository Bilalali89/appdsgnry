import React, {useEffect} from 'react';
import Link from 'next/link';
import AOS from 'aos';

const AboutApproach = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
        <div className="aboutapproach">
            <div className="container">
                <div className="slogan" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
                OUR APPROACH
                </div>
                <div className="heading"  data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
                Delightful experiences that make life simpler and more enjoyable.
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutApproach