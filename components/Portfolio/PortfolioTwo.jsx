import React, {useEffect} from 'react';
import Link from 'next/link';
import AOS from 'aos';

const PortfolioTwo = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                 <div className="portfoliotwo" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
                <img src="/images/portfoliopage/web_mockup.png" alt="nutrition" />
             </div>
            </div>
           
        </div>

    </div>
  )
}

export default PortfolioTwo