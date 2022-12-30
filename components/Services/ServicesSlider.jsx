import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 20,
  navText: [
    "<i class='pe-7s-angle-left'></i>",
    "<i class='pe-7s-angle-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    576: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 4,
    },
    1800: {
      items: 4,
    },
  },
};

class ServicesSlider extends Component {
  _isMounted = false;
  state = {
    display: false,
  };
  componentDidMount() {
    this._isMounted = true;
    this.setState({ display: true });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <>
        <div className="serviceslidersec">
          <section className="case-studies-area ptb-100">
            <div className="container-fluid">
              <div className="testimonialslide">
                {this.state.display ? (
                  <OwlCarousel
                    className="feedback-slides owl-carousel owl-theme"
                    {...options}
                  >
                    <div className="content ">
                      <div className="ssec-1">Web & App Design</div>
                      <div className="ssec-2">
                        Define your product, scope the MVP, and get a feel of
                        it. Or, simply find out how big of an investment that
                        would be.
                      </div>
                      <div className="ssec-3">
                        <p>Prototype</p>
                        <p>Visual Design</p>
                        <p>Mock-up Design</p>
                        <p>Responsive Design</p>
                      </div>
                    </div>
                    <div className="content">
                      <div className="ssec-1">Web & App Development</div>
                      <div className="ssec-2">
                        Ready to build? We’ll fully develop the MVP avoiding
                        technical debt! With modern technologies and complete
                        documentation, you’ll be able to scale in the future
                        quickly.
                      </div>
                      <div className="ssec-3">
                        <p>Native App</p>
                        <p>E-commerce App</p>
                        <p>SaaS Based</p>
                        <p>CMS</p>
                        <p>Back-end</p>
                      </div>
                    </div>
                    <div className="content">
                      <div className="ssec-1">Custom App Development</div>
                      <div className="ssec-2">
                        Ready to build? We’ll fully develop the MVP avoiding
                        technical debt! With modern technologies and complete
                        documentation, you’ll be able to scale in the future
                        quickly.
                      </div>
                      <div className="ssec-3">
                        <p>Native App</p>
                        <p>E-commerce App</p>
                        <p>SaaS Based</p>
                        <p>CMS</p>
                        <p>Back-end</p>
                      </div>
                    </div>
                    <div className="content">
                      <div className="ssec-1">Product Design Development</div>
                      <div className="ssec-2">
                        Ready to build? We’ll fully develop the MVP avoiding
                        technical debt! With modern technologies and complete
                        documentation, you’ll be able to scale in the future
                        quickly.
                      </div>
                      <div className="ssec-3">
                        <p>Native App</p>
                        <p>E-commerce App</p>
                        <p>SaaS Based</p>
                        <p>CMS</p>
                        <p>Back-end</p>
                      </div>
                    </div>
                    <div className="content ">
                      <div className="ssec-1">Web & App Design</div>
                      <div className="ssec-2">
                        Define your product, scope the MVP, and get a feel of
                        it. Or, simply find out how big of an investment that
                        would be.
                      </div>
                      <div className="ssec-3">
                        <p>Prototype</p>
                        <p>Visual Design</p>
                        <p>Mock-up Design</p>
                        <p>Responsive Design</p>
                      </div>
                    </div>
                    <div className="content">
                      <div className="ssec-1">Web & App Development</div>
                      <div className="ssec-2">
                        Ready to build? We’ll fully develop the MVP avoiding
                        technical debt! With modern technologies and complete
                        documentation, you’ll be able to scale in the future
                        quickly.
                      </div>
                      <div className="ssec-3">
                        <p>Native App</p>
                        <p>E-commerce App</p>
                        <p>SaaS Based</p>
                        <p>CMS</p>
                        <p>Back-end</p>
                      </div>
                    </div>
                    <div className="content">
                      <div className="ssec-1">Custom App Development</div>
                      <div className="ssec-2">
                        Ready to build? We’ll fully develop the MVP avoiding
                        technical debt! With modern technologies and complete
                        documentation, you’ll be able to scale in the future
                        quickly.
                      </div>
                      <div className="ssec-3">
                        <p>Native App</p>
                        <p>E-commerce App</p>
                        <p>SaaS Based</p>
                        <p>CMS</p>
                        <p>Back-end</p>
                      </div>
                    </div>
                    <div className="content">
                      <div className="ssec-1">Product Design Development</div>
                      <div className="ssec-2">
                        Ready to build? We’ll fully develop the MVP avoiding
                        technical debt! With modern technologies and complete
                        documentation, you’ll be able to scale in the future
                        quickly.
                      </div>
                      <div className="ssec-3">
                        <p>Native App</p>
                        <p>E-commerce App</p>
                        <p>SaaS Based</p>
                        <p>CMS</p>
                        <p>Back-end</p>
                      </div>
                    </div>
                  </OwlCarousel>
                ) : (
                  ""
                )}
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default ServicesSlider;
