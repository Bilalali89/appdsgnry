import React, {useEffect} from 'react';
import Link from 'next/link';
import AOS from 'aos';

const PortfolioAppContentOne = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="appcontentone">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <img src="/images/portfoliopage/Furniture app.png" alt="img" data-aos="fade-right" data-aos-duration="600" data-aos-delay="700"/>
            </div>
            <div className="col-md-6">
              <div className="heading" data-aos="fade-right" data-aos-duration="600" data-aos-delay="800">
                Apps That Makes <br />
                Your <span>Business Grow</span>
              </div>
              <div className="text" data-aos="fade-right" data-aos-duration="600" data-aos-delay="900">
                To anticipate various interactions, designing navigation was a
                necessary step. Analyzing a huge amount of information led us to
                create a set of key factors that defined the application user
                experience for customers that actually works.
              </div>
              <div className="row">
                <div className="col-3 col-md-2 col-xl-1">
                  <img
                    src="/images/portfoliopage/On brand.svg"
                    height="63"
                    width="auto"
                    alt="icon"
                    data-aos="fade-right" data-aos-duration="600" data-aos-delay="1000"
                  />
                </div>
                <div className="col-9 col-md-10 col-xl-3 icotext" data-aos="fade-right" data-aos-duration="600" data-aos-delay="1000">
                  On-brand <br />
                  App Design
                </div>
                <div className="col-3 col-md-2 col-xl-1">
                  <img
                    src="/images/portfoliopage/Engaging user.svg"
                    height="70"
                    width="auto"
                    alt="icon"
                    data-aos="fade-right" data-aos-duration="600" data-aos-delay="1200"
                  />
                </div>
                <div className="col-9 col-md-10 col-xl-3 icotext" data-aos="fade-right" data-aos-duration="600" data-aos-delay="1200">
                  Engaging User
                  <br />
                  Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAppContentOne;
