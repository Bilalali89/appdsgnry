import React, {useEffect} from 'react';
import Link from 'next/link';
import AOS from 'aos';

const HomeServices = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container-fluid homeservices" >
      <div className="container">
        <div className="headerone" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">WE SPECIALIZE IN</div>
        <div className="headertwo" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
          Smart UX, Pixel Perfect UI with Precise Coding Strategy.
        </div>
        <div className="row">
          {/* Research */}
          <div className="col-xl-3 col-lg-6 col-12 col-md-6">
            <div className="servicebox border-gradient border-gradient-purple" data-aos="fade-right" data-aos-duration="600" data-aos-delay="300">
              <div className="servicewrapper">
                <div className="icon">
                  <img src="/images/Research.svg" alt="research" />
                </div>
                <div className="title">Research</div>
                <div className="caption">
                  <ul>
                    <li>User Research</li>
                    <li>Customer Research</li>
                    <li>Competitive Review</li>
                    <li>Market Research</li>
                  </ul>
                </div>
              </div>

              <div className="rightarrow">
                <img src="/images/arrow.png" alt="arrow" />
              </div>
            </div>
          </div>
          {/* Strategy */}
          <div className="col-xl-3 col-lg-6 col-12 col-md-6">
            <div className="servicebox border-gradient border-gradient-purple" data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
              <div className="servicewrapper">
                <div className="icon">
                  <img src="/images/Strategy.svg" alt="strategy" />
                </div>
                <div className="title">Strategy</div>
                <div className="caption">
                  <ul>
                    <li>Product Ideation</li>
                    <li>Customer Journey Mapping</li>
                    <li>Customer/User Segmentation</li>
                    <li>Customer Experience</li>
                    <li>Technology Transformation </li>
                  </ul>
                </div>
              </div>

              <div className="rightarrow">
                <img src="/images/arrow.png" alt="arrow" />
              </div>
            </div>
          </div>
          {/* Design */}
          <div className="col-xl-3 col-lg-6 col-12 col-md-6">
            <div className="servicebox border-gradient border-gradient-purple" data-aos="fade-right" data-aos-duration="600" data-aos-delay="700">
              <div className="servicewrapper">
                <div className="icon">
                  <img src="/images/Design.svg" alt="design" />
                </div>
                <div className="title">Design</div>
                <div className="caption">
                  <ul>
                    <li>Digital Product Design</li>
                    <li>Service Design</li>
                    <li>Conversational Interfaces</li>
                    <li>Enterprise Applications</li>
                    <li>Responsive Design</li>
                    <li>Dashboard Design</li>
                    <li>Prototyping</li>
                  </ul>
                </div>
              </div>

              <div className="rightarrow">
                <img src="/images/arrow.png" alt="arrow" />
              
              </div>
            </div>
          </div>
          {/* Development */}
          <div className="col-xl-3 col-lg-6 col-12 col-md-6">
            <div className="servicebox border-gradient border-gradient-purple" data-aos="fade-right" data-aos-duration="600" data-aos-delay="900">
              <div className="servicewrapper">
                <div className="icon">
                  <img src="/images/Development.svg" alt="development" />
                </div>
                <div className="title">Development</div>
                <div className="caption">
                  <ul>
                    <li>SaaS</li>
                    <li>Mobile</li>
                    <li>Enterprise</li>
                    <li>Single Page Apps</li>
                    <li>Progressive Web Apps</li>
                  </ul>
                </div>
              </div>

              <div className="rightarrow">
                <img src="/images/arrow.png" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
        {/* Learn more button */}
        <div className="text-center">
          <Link href="/about">
            <a
              className="btn btn-secondary learn-btn" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300"
            >
              Learn more
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
