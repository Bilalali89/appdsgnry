import React from 'react';
import Link from 'next/link';
import {AppdData} from './AppdData';



const PriceCardApp = ({n}, props) => {

  
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {AppdData.slice(0,n).map((appdata) => {
            return <div key={appdata.id}className="col-lg-6 col-xl-4 col-sm-12">
            <div className="single-pricing-table premium">
                    <div className='plabel' style={{display:`${appdata.display}`}}>
                        <img src="/images/plabel.png" alt="label" />
                    </div>
                    <div className="pricing-header">
                    {appdata.packageName}
                    </div>
    
                    <div className="price">
                        <sup>$</sup>{appdata.price}
                    </div>

                    <ul className="pricing-features">
                        {appdata.features.map((features, index) => {
                            return <li key={index}>
                            <i className="icofont-check-circled"></i>
                            {features} 
                        </li> 
                        })}
        
                    </ul>

                    <div className="btn-box">
                        <Link href="/PackageSelect">
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

export default PriceCardApp