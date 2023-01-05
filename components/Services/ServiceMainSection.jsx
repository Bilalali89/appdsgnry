import React, {useEffect} from 'react';
import Link from 'next/link';
import AOS from 'aos';


const ServiceMainSection = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div>
        <div className="servicemainbg">
            <div className="container ptb-pricing">
                <div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className='servicehead' data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
                        Elegant Solutions <br/> <span>Built <br/> on Proven Methodologies</span>
                        </div>
                        <div className='servicetext' data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
                        We offer a wide range of design services under one roof: go-to-market strategies, UX, visual design, app design, development, implementation & more.
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="serviceviewbutton">
                        <div className="viewmore btn" data-aos="fade-right" data-aos-duration="600" data-aos-delay="700">
                        <Link href="/pricing">
                            <a>VIEW ALL SERVICES</a>
                        </Link>
                        </div>
                    </div>
                        <div className='serviceimg' data-aos="fade-right" data-aos-duration="600" data-aos-delay="800">
                        <img src="/images/services/Elegant@2x.png" alt="img" />
                        </div>
                      
                    </div>
                </div>
                </div>
                
            

            </div>
        </div>
    </div>
  )
}

export default ServiceMainSection