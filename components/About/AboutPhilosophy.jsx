import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";

const AboutPhilosophy = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="aboutphilosophy">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div
                className="art"
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="500"
              >
                <img
                  src="/images/aboutus/Process Built on Result.png"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div
                className="subheading"
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="500"
              >
                OUR PHILOSOPHY
              </div>
              <div
                className="heading"
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="500"
              >
                A Process Built On Results
              </div>
              <div
                className="text"
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="500"
              >
                We’ve developed an approach that works, getting the best from
                your team and ours. We take the time to listen and get it right,
                guiding you every step of the way.
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="title"
                    data-aos="fade-right"
                    data-aos-duration="600"
                    data-aos-delay="500"
                  >
                    Product Specialists
                  </div>
                  <div
                    className="body"
                    data-aos="fade-right"
                    data-aos-duration="600"
                    data-aos-delay="500"
                  >
                    We are 100% product focused. Our process marries business
                    strategy with user feedback for the best possible outcome.
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="title"
                    data-aos="fade-right"
                    data-aos-duration="600"
                    data-aos-delay="500"
                  >
                    An Extension To Your Team
                  </div>
                  <div
                    className="body"
                    data-aos="fade-right"
                    data-aos-duration="600"
                    data-aos-delay="500"
                  >
                    We thrive on collaboration and work best when we’re
                    integrated with ambitious product teams.
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="title"
                    data-aos="fade-right"
                    data-aos-duration="600"
                    data-aos-delay="500"
                  >
                    A Proactive Partner
                  </div>
                  <div
                    className="body"
                    data-aos="fade-right"
                    data-aos-duration="600"
                    data-aos-delay="500"
                  >
                    We create productive, long-lasting client relationships that
                    work towards a common goal.
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="title"
                    data-aos="fade-right"
                    data-aos-duration="600"
                    data-aos-delay="500"
                  >
                    Strategic Value
                  </div>
                  <div
                    className="body"
                    data-aos="fade-right"
                    data-aos-duration="600"
                    data-aos-delay="500"
                  >
                    With years of industry experience we help organisations
                    grow, improve processes and empower internal teams to be
                    their best.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container ptb-50">
          <div className="row">
            <div className="col-md-4">
              <div className="gridbox"  data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
                <div className="icon">
                  <img
                    src="/images/aboutus/invigorate.svg"
                    height="100"
                    width="auto"
                    alt="icon"
                  />
                </div>
                <div className="headingg">INVIGORATE</div>
                <div className="subheadingg">RESEARCH & STRATEGY</div>
                <div className="textt">
                  We listen, ask, and learn. We uncover the essence and
                  opportunity to construct the most effective strategy.
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="gridbox" data-aos="fade-right" data-aos-duration="600" data-aos-delay="700">
                <div className="icon">
                  <img
                    src="/images/aboutus/accelerate.svg"
                    height="100"
                    width="auto"
                    alt="icon"
                  />
                </div>
                <div className="headingg">ACCELERATE</div>
                <div className="subheadingg">PROPOSITION & IDENTITY</div>
                <div className="textt">
                  We craft with words and creativity producing design solutions
                  that breathe life into a brand.
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="gridbox" data-aos="fade-right" data-aos-duration="600" data-aos-delay="900">
                <div className="icon3">
                  <img
                    src="/images/aboutus/transform.svg"
                    height="80"
                    width="auto"
                    alt="icon"
                  />
                </div>
                <div className="headingg">TRANSFORM</div>
                <div className="subheadingg">APPLICATION & ACTIVATION</div>
                <div className="textt">
                  We make change happen, activating brands with diverse
                  deliverables on time and on budget.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPhilosophy;
