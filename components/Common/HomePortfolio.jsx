import React from 'react'
import Slider from "react-slick";
import Link from 'next/link';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",}}
        onClick={onClick}
      />
    );
  }
  


const HomePortfolio = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
          variableWidth: true,
          adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
                adaptiveHeight: true,
                arrows: false
               
              }
            }
          ]
        
      };
  return (
    <div>
      <div className="container-fluid" style={{ padding: 0 }}>
        <div className="portfoliosec">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-10">
                <div className="portdiv d-flex justify-content-space-between">
                  <div className="headingportfolio">
                    Our <br />
                    <span className="blue">Portfolio</span>
                  </div>
                  <div className="headingportfolio2">
                    What <br />
                    <span className="blue">We Excel At</span>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid slidehide">
            <Slider {...settings}>
              <div className="slide">
                <div>
                  <Link href="/portfolio">
                  <img
                    src="/images/portfolio/Portfolio 5.png"
                    alt="portfolio"
                  />
                  </Link>
                </div>
              </div>
              <div className="slide">
                <div>
                <Link href="/portfolio">
                  <img
                    src="/images/portfolio/Portfolio 2.png"
                    alt="portfolio"
                  />
                   </Link>
                </div>
                <div>
                <Link href="/portfolio">
                  <img
                    src="/images/portfolio/Portfolio 3.jpg"
                    alt="portfolio"
                  />
                   </Link>
                </div>
              </div>
              <div className="slide">
                <div>
                <Link href="/portfolio">
                  <img
                    src="/images/portfolio/Portfolio 1.png"
                    alt="portfolio"
                  />
                   </Link>
                </div>
              </div>
              <div className="slide">
                <div>
                <Link href="/portfolio">
                  <img
                    src="/images/portfolio/Portfolio 9.png"
                    alt="portfolio"
                  />
                   </Link>
                </div>
                <div style={{ paddingTop: "78px" }}>
                <Link href="/portfolio">
                  <img
                    src="/images/portfolio/Portfolio 8.png"
                    alt="portfolio"
                  />
                   </Link>
                </div>
              </div>
            </Slider>
          </div>
          <div className="container mobportfolio">
            <div className='port'>
            <Link href="/portfolio">
               <img src="/images/mobportfolio/Portfolio 1 for mobile.png" alt="img" />
               </Link>
            </div>
            <div className='port'>
              <Link href="/portfolio">
               <img src="/images/mobportfolio/Portfolio 2 for mobile.png" alt="img" />
               </Link>
            </div>
            <div className='port'>
              <Link href="/portfolio">
               <img src="/images/mobportfolio/Portfolio 3 for mobile.png" alt="img" />
               </Link>
            </div>

          </div>
          <div className="container">
          <div className="d-flex viewbutton">
                    <div className="viewmore btn">
                      <Link href="/portfolio">
                        <a>VIEW MORE</a>
                      </Link>
                    </div>
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePortfolio