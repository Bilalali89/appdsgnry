import React, {useEffect} from 'react';
import Link from 'next/link';
import AOS from 'aos';
import Image from 'next/image';
import mobile from './../../public/images/portfoliopage/Cutsom-app.png'

const PortfolioAppContentTwo = () => {
    
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
         <div className="appcontenttwo">
        <div className="container-fluid">
          <div className="row">     
            <div className="col-md-6">
                <div className="slogan" data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">FEATURED</div>
              <div className="heading" data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
                Custom Application Development
              </div>
              <div className="text" data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
              We offer a wide range of design services under one roof: audits, go-to-market strategies, UX, visual design, app design & development, implementation & more. We bring your ambitious ideas to life.
              </div>
              <div className="row">
                <div className="col-3 col-md-2 col-xl-1">
                  <img
                    src="/images/portfoliopage/Andriod & IOS.svg"
                    height="63"
                    width="auto"
                    alt="icon" 
                    data-aos="fade-right" data-aos-duration="600" data-aos-delay="500"
                  />
                </div>
                <div className="col-9 col-md-10 col-xl-3 icotext" data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
                  Android & <br />
                  iOS Native
                </div>
                <div className="col-3 col-md-2 col-xl-1">
                  <img
                    src="/images/portfoliopage/App UI Style Guide.svg"
                    height="70"
                    width="auto"
                    alt="icon"
                    data-aos="fade-right" data-aos-duration="600" data-aos-delay="500"
                  />
                </div>
                <div className="col-9 col-md-10 col-xl-3 icotext" data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
                  App UI
                  <br />
                 Style Guide
                </div>
              </div>
            </div>
            <div className="col-md-6">
            <Image 
                  src={mobile}
                  />
              {/* <img src="/images/portfoliopage/Cutsom app.png" alt="img" data-aos="fade-right" data-aos-duration="600" data-aos-delay="1000"/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioAppContentTwo