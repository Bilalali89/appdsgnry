import React, {useEffect} from 'react';
import Link from 'next/link';
import AOS from 'aos';
import Image from 'next/image';
import tablet from './../../public/images/services/2tabs-purple@2x.png'


const ServiceTabletSection = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div>
        <div className="servicetabletsec">
            <div className="container ptb-tabletsection">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="firsttext" data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
                        OUR SPECIALISMS
                        </div>
                        <div className="firstheading" data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
                        Our skills are transferable, whatever your business. We have extensive experience within B2B, technology and SAAS, education and not-for-profit organisations. We also have a passion for working with sports, transport, hospitality and place brands. Sound good? 
                        </div>
                        <div className='link' data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
                            <Link href="/contact">
                                     Let’s talk.
                            </Link>
                            
                        </div>
                    </div>
                    <div className="col-lg-6 col-12" data-aos="fade-right" data-aos-duration="600" data-aos-delay="800">
                        {/* <img src="/images/services/2tabs-purple@2x.png" alt="tab" /> */}
                        <Image
                        src={tablet} 
                        />
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ServiceTabletSection