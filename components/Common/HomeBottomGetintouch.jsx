import React, {useEffect} from 'react';
import Link from 'next/link';
import AOS from 'aos';

const HomeBottomGetintouch = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div>
        <div className="container-fluid getintouch">
            <div className="row">
                <div className="col-lg-5 col-12">
                    <img src="/images/tablet.png" alt="tablet" data-aos="fade-right" data-aos-duration="600" data-aos-delay="300" />
                </div>
                <div className="col-lg-7 col-12 d-flex">
                    <div className='getcontent'>
                       <div className="getheading" data-aos="fade-right" data-aos-duration="600" data-aos-delay="300">
                        Let's develop something awesome <span className='color'>together</span>.
                       </div>
                       <div className='gettext' data-aos="fade-right" data-aos-duration="600" data-aos-delay="300">
                               We help you build beautifully and scale successfully.
                       </div>
                       <div className="getbutton" data-aos="fade-right" data-aos-duration="600" data-aos-delay="300">
                         <span>
                            <Link href="/contact">
                                <a> <img src="/images/Send.svg" alt="send" className='paperplane'/>&nbsp;&nbsp;Get in Touch</a>                   
                            </Link>
                            
                        </span>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeBottomGetintouch