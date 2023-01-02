import React from 'react';
import HomeContactForm from '../Contact/HomeContactForm';
HomeContactForm

const HomeBottomContact = () => {
  return (
    <div>
        <div className="container-fluid bottombg" >
            <div className="bottomcontactsec" >
                
            <div className="row">
                <div className="col-md-8" >
                    <div className="row">
                        <div className="col-12 col-sm-2"></div>
                        <div className="col-12 col-sm-10">
                            <div className='sec'>
                                <div className="contactheading">
                                Let's Discuss your idea
                            </div>
                            <div className="contacttext">
                                Your next business oriented application
                            </div>
                            <div>
                                <HomeContactForm />
                            </div>
                            </div>
                            
                            
                        </div>
                    </div>
                    <div className="bottomsec">
                    <div className="row">
                    <div className="col-12 col-sm-2"></div>
                    <div className="col-12 col-sm-10">
                        <div className="row">
                            <div className="col-6">
                                <div className='bottomdiv'>
                                    <div className='bold'>75%</div>
                                    <div className='text'>YEAR 2022 REVENUE GENERATED</div>
                                </div>
                                
                            </div>
                            <div className="col-6">
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
                        <img src="/images/letsdiscuss.png" width="400px" height="auto" alt="img" />
                    </div>
                </div>
                
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default HomeBottomContact