import React, {useEffect} from 'react';
import Link from 'next/link';
import AOS from 'aos';
import HomeContactForm from '../Contact/HomeContactForm';
HomeContactForm

const HomeBottomContact = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div>
        <div className="container-fluid bottombg" >
            <div className="bottomcontactsec" >
                
            <div className="row">
                <div className="col-md-8" >
                    <div className="row">
                        
                        <div className="col-12 col-md-10 offset-md-1 offset-lg-2">
                            <div className='sec'>
                                <div className="contactheading" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
                                Let's Discuss your idea
                            </div>
                            <div className="contacttext" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500" >
                                Your next business oriented application
                            </div>
                            <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
                                <HomeContactForm  />
                            </div>
                            </div>
                            
                            
                        </div>
                    </div>
                    <div className="bottomsec" data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
                    <div className="row">
                   
                    <div className="col-12 col-md-10 offset-md-1 offset-lg-2">
                        <div className="row">
                            <div className="col-6 col-sm-12 col-xl-6">
                                <div className='bottomdiv'>
                                    <div className='bold'>75%</div>
                                    <div className='text'>YEAR 2022 REVENUE GENERATED</div>
                                </div>
                                
                            </div>
                            <div className="col-6 col-sm-12 col-xl-6">
                                <div className='bottomdiv2'>
                                    <div className='bold'>89%</div>
                                    <div className='text'>TOTAL ORDERS COMPLETED</div>
                                </div>
                                
                            </div>
                            {/* <div className="col-4">
                                <div className='bottomdiv2' >
                                    <div className='bold'>99%</div>
                                    <div className='text'>MONEY BACK GUARANTEE</div>
                                </div>
                                
                            </div> */}
                        </div>
                    </div>

                    </div>
                    </div>
                    
                </div>
                <div className="col-md-4">
                    <div className='mobilebanner text-center'>
                        <img src="/images/letsdiscuss.png" width="400px" height="auto" alt="img" data-aos="fade-left" data-aos-duration="600" data-aos-delay="500" />
                    </div>
                </div>
                
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default HomeBottomContact