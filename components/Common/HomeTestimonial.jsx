import React, {useEffect} from 'react';
import Link from 'next/link';
import AOS from 'aos';
import HomeTestimonialSlider from './HomeTestimonialSlider'

const HomeTestimonial = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div>
        <div className="container-fluid testimonialbg" style={{padding: '0'}}>
            <div className="testimonialsec">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-6 d-flex order-2 order-sm-1 col-12">
                        <div className='mainheading' data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
                            Companies love to share experiences!
                        </div>
                    

                  </div>
                  <div className="col-xl-6 order-1 order-sm-2 col-12" data-aos="fade-right" data-aos-duration="600" data-aos-delay="1000">
                    <div className="reviewrow">
                        <img className="review1" src="/images/review/Review 1.png" alt="img" />
                        <img className="review4" src="/images/review/Review 4.png" alt="img" />
                    </div>
                    <div className="reviewrow">
                    <img className="review3" src="/images/review/Review 3.png" alt="img" />
                    <img className="review2" src="/images/review/Review 2.png" alt="img" />
                    <img className="review6" src="/images/review/Review 6.png" alt="img" />
                    
                   

                    </div>
                    <div className="reviewrow">
                        <img className="review7" src="/images/review/Review 7.png" alt="img" />
                    </div>
                        

                  </div>
                    </div>
                </div>
                <div className="container">
                    <div className='testimonial' data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
                    <div className="full">
                        <img src="/images/review/testimonialfull.png" alt="full" />
                    </div> 
                        <HomeTestimonialSlider />

                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default HomeTestimonial