import React, {useEffect} from 'react';
import Link from 'next/link';
import AOS from 'aos';

const PortfolioIntroSection = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div>
        <div className="introsection">
            <div className="mobdiv" >
            <div className='title' data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
                    Value-Driven Approach To Every Product.
                </div>
                <div className="button" data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
                                <span className="btn btn-casestudy">
                                  <a href="#">VIEW CASE STUDY</a>  
                                </span>
                </div>
                <div className='mockup' data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
                    <img src="/images/portfoliopage/mobile-mockup-002.png" alt="img" />
                </div>
                
               
                

            </div>
            <div className="mainDiv" data-aos="fade-right" data-aos-duration="600" data-aos-delay="1000">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-6">
                            <div className="heading" data-aos="fade-left" data-aos-duration="600" data-aos-delay="1500">
                            Value-Driven Approach To Every Product.
                            </div>
                            <div className="button" data-aos="fade-left" data-aos-duration="600" data-aos-delay="1500">
                                <span className="btn btn-casestudy">
                                  <a href="#">VIEW CASE STUDY</a>  
                                </span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="container-fluid">
                 <div className="bottomheading" data-aos="fade-left" data-aos-duration="600" data-aos-delay="500">
                    <div> We help to start, <span className='green'>sustain</span> <br/> and <span className='blue'>grow</span> businesses with us.</div>
                   
                 </div>
            </div>
           

        </div>
    </div>
  )
}

export default PortfolioIntroSection