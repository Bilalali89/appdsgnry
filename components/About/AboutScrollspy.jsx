import React, {useEffect} from 'react';
import Link from 'next/link';
import AOS from 'aos';
import Scrollspy from "react-scrollspy";

const AboutScrollspy = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="scroll">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-3">
            <Scrollspy
              offset="50"
              items={["section-1", "section-2", "section-3", "section-4"]}
              currentClassName="is-current"
            >
              <li className='one'>
                <a href="#section-1">Research</a>
              </li>
              <li className='two'>
                <a href="#section-2">Strategy</a>
              </li>
              <li className='three'>
                <a href="#section-3">Design</a>
              </li>
              <li className='four'>
                <a href="#section-4">Development</a>
              </li>
            </Scrollspy>
          </div>
          <div className="col-md-9">
            <section id="section-1" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
              <div className="vh"></div>
              <div className="row">
                <div className="col-md-3">
                  <div className="box">
                    <div className="icon">
                      <img
                        src="/images/Research.svg"
                        width="37"
                        height="45"
                        alt="icon"
                      />
                    </div>
                    <div className="heading">Research</div>
                    <div className="list">
                      <p>
                        <span>+</span> User Research
                      </p>
                      <p>
                        <span>+</span> Comptetive Review
                      </p>
                      <p>
                        <span>+</span> Market Research
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="textbox">
                    <div className="row">
                      <div className="col-md-2">
                        <img src="/images/arrow.png" alt="arrow" />
                      </div>
                      <div className="col-md-10">
                        <div className="text">
                          We believe in a thorough, efficient & research phase
                          in order to make sure we and our client partners have
                          all we need to make informed product decisions.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="image">
                    <img src="/images/aboutus/Research.png" alt="img" />
                  </div>
                </div>
              </div>
            </section>
            <section id="section-2" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
            <div className="vh"></div>
            <div className="row">
                <div className="col-md-3">
                  <div className="box">
                    <div className="icon">
                      <img
                        src="/images/Strategy.svg"
                        width="auto"
                        height="45"
                        alt="icon"
                      />
                    </div>
                    <div className="heading">Strategy</div>
                    <div className="list">
                      <p>
                        <span>+</span> Product Ideation
                      </p>
                      <p>
                        <span>+</span> Customer Journey
                      </p>
                      <p>
                        <span>+</span> User Flow
                      </p>
                      <p>
                        <span>+</span> Customer Experience
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="textbox">
                    <div className="row">
                      <div className="col-md-2">
                        <img src="/images/arrow.png" alt="arrow" />
                      </div>
                      <div className="col-md-10">
                        <div className="text">
                        We craft research-backed product strategies that help our process move through the key execution stages in an efficient manner, without the need to backtrack.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="image">
                    <img src="/images/aboutus/Strategy.png" alt="img" />
                  </div>
                </div>
              </div>
            </section>
            <section id="section-3" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
            <div className="vh"></div>
            <div className="row">
                <div className="col-md-3">
                  <div className="box">
                    <div className="icon">
                      <img
                        src="/images/Design.svg"
                        width="auto"
                        height="45"
                        alt="icon"
                      />
                    </div>
                    <div className="heading">Design</div>
                    <div className="list">
                      <p>
                        <span>+</span> Design Prototype
                      </p>
                      <p>
                        <span>+</span> UX/UI Design
                      </p>
                      <p>
                        <span>+</span> Brand Design
                      </p>
                      <p>
                        <span>+</span> Visual Design
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="textbox">
                    <div className="row">
                      <div className="col-md-2">
                        <img src="/images/arrow.png" alt="arrow" />
                      </div>
                      <div className="col-md-10">
                        <div className="text">
                        Our creatives and design team is passionate about aesthetics and user experience, following the latest trends but also crafting new styles to disrupt the market.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="image">
                    <img src="/images/aboutus/Design.png" alt="img" />
                  </div>
                </div>
              </div>
            </section>
            <section id="section-4" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
            <div className="vh"></div>
            <div className="row">
                <div className="col-md-3">
                  <div className="box">
                    <div className="icon">
                      <img
                        src="/images/Development.svg"
                        width="auto"
                        height="45"
                        alt="icon"
                      />
                    </div>
                    <div className="heading">Development</div>
                    <div className="list">
                      <p>
                        <span>+</span> SaaS
                      </p>
                      <p>
                        <span>+</span> Mobile
                      </p>
                      <p>
                        <span>+</span> Enterprise
                      </p>
                      <p>
                        <span>+</span> User Testing/Usability
                      </p>
                      <p>
                        <span>+</span> Heuristic Evaluation
                      </p>
                         
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="textbox">
                    <div className="row">
                      <div className="col-md-2">
                        <img src="/images/arrow.png" alt="arrow" />
                      </div>
                      <div className="col-md-10">
                        <div className="text">
                        Our dev engineering group is made up of industry veterans who have “been there, done that,” and we leverage that deep experience to protect and support our client partners perform user testing.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="image">
                    <img src="/images/aboutus/Development.png" alt="img" />
                  </div>
                </div>
              </div>
            </section>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScrollspy;
