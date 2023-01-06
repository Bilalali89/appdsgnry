import React, {useEffect} from 'react';
import Link from 'next/link';
import AOS from 'aos';
import Image from 'next/image';
import portfolio from './../../public/images/portfoliopage/web_mockup.png'

const PortfolioTwo = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                 <div className="portfoliotwo" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
                {/* <img src="/images/portfoliopage/web_mockup.png" alt="nutrition" /> */}
                <Image 
                  src={portfolio}
                  />
             </div>
            </div>
           
        </div>

    </div>
  )
}

export default PortfolioTwo