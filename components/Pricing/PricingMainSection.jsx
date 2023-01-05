import React, {useEffect} from 'react';
import Link from 'next/link';
import AOS from 'aos';

const PricingMainSection = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div>
        <div className="pricingbg">
            <div className="container ptb-pricing">
                <div className='pb_100'>
                <div className="row">
                    <div className="col-lg-9">
                        <div className='pricinghead' data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
                            Awesome Designs <br/> <span>Just A Click Away!</span>
                        </div>
                    </div>
                    <div className="col-lg-3 text-center">
                        <img src="/images/pricing/guarantee.png" alt="img" data-aos="flip-right" data-aos-duration="600" data-aos-delay="500"/>
                    </div>
                </div>
                </div>
                
                <div className="row">
                    <div className="col-lg-9">
                    <div className='pricingtext' data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
                             At App DSGNRY we offer custom plans personalized around your needs. Our only goal is the success of our clients!
                    </div>
                    </div>
                    <div className="col-lg-3 text-center">
                        <img src="/images/pricing/trustpilot.png" alt="img" data-aos="flip-right" data-aos-duration="600" data-aos-delay="500"/>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default PricingMainSection