import React, {useEffect} from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import AOS from 'aos';

const HomeStatsCounter = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="container-fluid statsbg">
        <div className="container">
          <div className="statsheading" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
            We Connect <span className="bold">Businesses</span> with{" "}
            <span className="bold">Customers</span>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-12 col-md-6">
              <div className="countbox" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
                <div className="icon">
                  <img src="/images/counter1.png" alt="icon" />
                </div>
                <div className="value">
                  <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                      <div style={{ height: 60 }}>
                        {isVisible ? (
                          <CountUp duration={3} end={360} delay={.5} suffix="+" />
                        ) : null}
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
                <div className="text">Worlwide Clients</div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-12 col-md-6">
              <div className="countbox" data-aos="fade-up" data-aos-duration="600" data-aos-delay="700">
                <div className="icon">
                  <img src="/images/counter2.png" alt="icon" />
                </div>
                <div className="value">
                <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                      <div style={{ height: 60 }}>
                        {isVisible ? (
                          <CountUp duration={3} end={215} delay={.5} prefix="$" suffix="k" />
                        ) : null}
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
                <div className="text">Sales Transaction</div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-12 col-md-6">
              <div className="countbox" data-aos="fade-up" data-aos-duration="600" data-aos-delay="900">
                <div className="icon">
                  <img src="/images/counter3.png" alt="icon" />
                </div>
                <div className="value">
                <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                      <div style={{ height: 60 }}>
                        {isVisible ? (
                          <CountUp duration={3} end={654} delay={.5} prefix="$" suffix="k" />
                        ) : null}
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
                <div className="text">E-com Transactions</div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-12 col-md-6">
              <div className="countbox" data-aos="fade-up" data-aos-duration="600" data-aos-delay="1100">
                <div className="icon">
                  <img src="/images/counter4.png" alt="icon" />
                </div>
                <div className="value">
                <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                      <div style={{ height: 60 }}>
                        {isVisible ? (
                          <CountUp duration={3} end={543} delay={.5} suffix="k" />
                        ) : null}
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
                <div className="text">Qualified Calls Generated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStatsCounter;
