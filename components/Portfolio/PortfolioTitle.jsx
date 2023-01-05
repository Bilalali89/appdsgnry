import React, {useEffect} from 'react';
import Link from 'next/link';
import AOS from 'aos';

const PortfolioTitle = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="portfoliofour">
            
            <div className="textheading" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                   WE PARTNER <br/>WITH VISIONARIES<br/>TO MOLD IDEAS<br/>INTO REAL PRODUCTS
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTitle;
