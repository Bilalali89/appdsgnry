import React, { Component } from 'react';

class PageBanner extends Component {
    render() {

        let { pageTitle, BGImage, pageDescription } = this.props;

        return (
            // <div className="page-title-area bg-one">
            <div className={`page-title-area ${BGImage}`}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <p>{pageTitle}</p>
                            <h2>{pageDescription}</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageBanner;