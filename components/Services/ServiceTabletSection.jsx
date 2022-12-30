import React from 'react';
import Link from 'next/link';

const ServiceTabletSection = () => {
  return (
    <div>
        <div className="servicetabletsec">
            <div className="container ptb-tabletsection">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="firsttext">
                        OUR SPECIALISMS
                        </div>
                        <div className="firstheading">
                        Our skills are transferable, whatever your business. We have extensive experience within B2B, technology and SAAS, education and not-for-profit organisations. We also have a passion for working with sports, transport, hospitality and place brands. Sound good? 
                        </div>
                        <div className='link'>
                            <Link href="/contact">
                                     Let’s talk.
                            </Link>
                            
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <img src="/images/services/2tabs-purple@2x.png" alt="tab" />
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ServiceTabletSection