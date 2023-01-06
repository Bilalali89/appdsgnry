import React, {useEffect} from 'react';
import Link from 'next/link';
import AOS from 'aos';
import Image from 'next/image';
import portfolio from './../../public/images/portfoliopage/travelling app mockups.png'

const PortfolioThree = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                 <div className="portfoliothree" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
                  <Image 
                  src={portfolio}
                   />
                     {/* <img src="/images/portfoliopage/travelling app mockups.png" alt="nutrition" /> */}
                 </div>
            </div>       
        </div>
    </div>
  )
}

export default PortfolioThree