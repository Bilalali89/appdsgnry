import React from 'react'

const PortfolioIntroSection = () => {
  return (
    <div>
        <div className="introsection">
            <div className="mobdiv">
            <div className='title'>
                    Value-Driven Approach To Every Product.
                </div>
                <div className="button">
                                <span className="btn btn-casestudy">
                                  <a href="#">VIEW CASE STUDY</a>  
                                </span>
                </div>
                <div className='mockup'>
                    <img src="/images/portfoliopage/mobile-mockup-002.png" alt="img" />
                </div>
                
               
                

            </div>
            <div className="mainDiv">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-6">
                            <div className="heading">
                            Value-Driven Approach To Every Product.
                            </div>
                            <div className="button">
                                <span className="btn btn-casestudy">
                                  <a href="#">VIEW CASE STUDY</a>  
                                </span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="container-fluid">
                 <div className="bottomheading">
                    <div> We help to start, <span className='green'>sustain</span> <br/> and <span className='blue'>grow</span> businesses with us.</div>
                   
                 </div>
            </div>
           

        </div>
    </div>
  )
}

export default PortfolioIntroSection