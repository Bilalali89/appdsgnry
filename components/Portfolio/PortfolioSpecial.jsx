import React, {useEffect} from 'react';
import Link from 'next/link';
import AOS from 'aos';

const PortfolioSpecial = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="portfoliospecial">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 col-12" style={{ padding: "0" }}>
              <div className="section-one">
                <div className="slogan"  data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">FEATURED</div>
                <div className="heading"  data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
                  Redesigning e-commerce for a product focussed experience
                </div>
                <div className="text-center">
                  <img src="/images/portfoliopage/dashboard.png" alt="img"  data-aos="fade-right" data-aos-duration="600" data-aos-delay="500" />
                </div>
                <div className="row">
                  <div className="col-lg-6 offset-lg-6">
                    <div className="h">
                      <div className="h1"  data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">Product Specialists</div>
                      <div className="h2"  data-aos="fade-right" data-aos-duration="600" data-aos-delay="500"> 
                        We are 100% product focused. Our process marries
                        business strategy with user feedback for the best
                        possible outcome.
                      </div>
                      <div className="h3"  data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">Let’s get started.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12" style={{ padding: "0" }}>
              <div className="section-two">
                <div className="heading"  data-aos="fade-left" data-aos-duration="600" data-aos-delay="1000">
                  We’ve developed an approach that works, getting the best from
                  your team and ours.
                </div>
                <div className="extension">
                  <div className="head"  data-aos="fade-left" data-aos-duration="600" data-aos-delay="500">AN EXTENSION TO YOUR TEAM</div>
                  <div className="text"  data-aos="fade-left" data-aos-duration="600" data-aos-delay="500">
                    We thrive on collaboration and work best when we’re
                    integrated with ambitious product teams.
                  </div>
                </div>
                <div className="arrw"  data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
                    <img src="/images/arrow-black.png" alt="arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSpecial;
