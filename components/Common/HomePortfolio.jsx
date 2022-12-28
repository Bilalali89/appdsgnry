import React from 'react'
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  


const HomePortfolio = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
          variableWidth: true,
          adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
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
                adaptiveHeight: true
               
              }
            }
          ]
        
      };
  return (
    <div>
        <div className="container-fluid" style={{padding: 0}}>
            <div className="portfoliosec">
            <div className="container">
                <div className='headingportfolio'>
                    Our <br/>
                    <span className='blue'>Portfolio</span>
                </div>
            </div>
            <div className="container-fluid"  >
               

                
            <Slider {...settings}>
                <div className='slide'>
                    <div>
                        <img src="/images/portfolio/Portfolio 5.png" alt="portfolio" />
                    </div>
                </div>
                <div className='slide'>
                    <div>
                        <img src="/images/portfolio/Portfolio 2.png" alt="portfolio" />
                    </div>
                    <div>
                        <img src="/images/portfolio/Portfolio 3.jpg" alt="portfolio" />
                    </div>
                </div>
                <div className='slide'>
                <div>
                        <img src="/images/portfolio/Portfolio 1.png" alt="portfolio" />
                    </div>
                </div>
                <div className='slide'>
                <div>
                        <img src="/images/portfolio/Portfolio 9.png" alt="portfolio" />
                    </div>
                    <div style={{paddingTop: '78px'}}>
                        <img src="/images/portfolio/Portfolio 8.png" alt="portfolio" />
                    </div>
                </div>
                
            </Slider>
            </div>
           
        
        </div>
        </div>
    </div>
        
  )
}

export default HomePortfolio