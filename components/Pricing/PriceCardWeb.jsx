import React from 'react';
import Link from 'next/link';
import {WebdData} from './WebdData';

const PriceCardWeb = ({n}, props) => {
    
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {WebdData.slice(0,n).map((webdata) => {
            return <div key={webdata.id}className="col-lg-6 col-xl-4 col-sm-12 col-12">
            <div className="single-pricing-table premium">
                    <div className='plabel' style={{display:`${webdata.display}`}}>
                        <img src="/images/plabel.png" alt="label" />
                    </div>
                    <div className="pricing-header">
                    {webdata.packageName}
                    </div>
    
                    <div className="price">
                        <sup>$</sup>{webdata.price}
                    </div>

                    <ul className="pricing-features">
                        {webdata.features.map((features, index) => {
                            return <li key={index}>
                            <i className="icofont-check-circled"></i>
                            {features} 
                        </li> 
                        })}
        
                    </ul>

                    <div className="btn-box">
                        <Link key={webdata.id} href="/PackageSelect">
                            <a className="btn btn-primary green">
                                <i className="bx bxs-hot"></i> 
                                Order Now   
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        })}
                            
    </div>
  )
}

export default PriceCardWeb