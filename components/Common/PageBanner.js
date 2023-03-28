import React from 'react';

const PageBanner = (props) => {
    let { pageTitle, BGImage, pageDescription, DNONE} = props;
  return (
    <div className={`page-title-area ${BGImage}`}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <p>{pageTitle}</p>
                            <h2>{pageDescription}</h2>
                            <div className="pricebannerlogo" style={{display:`${DNONE}`}}>
                                <img src="/images/pricing/Banner star.png" alt="star" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default PageBanner;