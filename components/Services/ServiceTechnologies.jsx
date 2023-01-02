import React, { Component } from 'react'

class ServiceTechnologies extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

  render() {
    return (
      <div style={{marginTop: '-1px'}}>
        <div className="technologiestab pb-100">
            <div className="container">
                <div className="techtitle">
                  Technologies
                </div>
                <div className="techtabs">
                 <div className="tab pricing-list-tab">
                            {/* Pricing Tab List */}
                            <ul className="tabs">
                                <li
                                    className="current"
                                    onClick={(e) => this.openTabSection(e, 'tab1')}
                                >
                                    Frontend
                                </li>

                                <li
                                    onClick={(e) => this.openTabSection(e, 'tab2')}
                                >
                                    Backend
                                </li>
                                <li
                                    onClick={(e) => this.openTabSection(e, 'tab3')}
                                >
                                    Infrastructure
                                </li>
                                <li
                                    onClick={(e) => this.openTabSection(e, 'tab4')}
                                >
                                    Design
                                </li>
                                
                            </ul>

                            <div className="tab_content">
                                <div id="tab1" className="tabs_item">
                                    <div className="row">
                                        <div className="col-md-2 col-6 text-center">
                                            <img src="/images/services/Wordpress.png" alt="technologies" />
                                        </div>
                                        <div className="col-md-2 col-6 text-center">
                                            <img src="/images/services/React.png" alt="technologies" />
                                        </div>
                                        <div className="col-md-2 col-6 text-center">
                                            <img src="/images/services/JS.png" alt="technologies" />
                                        </div>
                                        <div className="col-md-2 col-6 text-center">
                                            <img src="/images/services/Veue JS.png" alt="technologies" />
                                        </div>
                                        <div className="col-md-2 col-6 text-center">
                                            <img src="/images/services/Bootstrap.png" alt="technologies" />
                                        </div>
                                        <div className="col-md-2 col-6 text-center">
                                            <img src="/images/services/dotnet.png" alt="technologies" />
                                        </div>      
                                      
                                    </div>
                                </div>
                                <div id="tab2" className="tabs_item">
                                    <div className="row">
                                    <div className="col-md-2 col-6 text-center">
                                            <img src="/images/services/Veue JS.png" alt="technologies" />
                                        </div>
                                        <div className="col-md-2 col-6 text-center">
                                            <img src="/images/services/Bootstrap.png" alt="technologies" />
                                        </div>
                                        <div className="col-md-2 col-6 text-center">
                                            <img src="/images/services/dotnet.png" alt="technologies" />
                                        </div> 
                                    <div className="col-md-2 col-6 text-center">
                                            <img src="/images/services/Wordpress.png" alt="technologies" />
                                        </div>
                                        <div className="col-md-2 col-6 text-center">
                                            <img src="/images/services/React.png" alt="technologies" />
                                        </div>
                                        <div className="col-md-2 col-6 text-center">
                                            <img src="/images/services/JS.png" alt="technologies" />
                                        </div>
                                       
                                      
                                    </div>
                                </div>
                                <div id="tab3" className="tabs_item">
                                    <div className="row">
                                    <div className="col-md-2 col-6 text-center">
                                            <img src="/images/services/Wordpress.png" alt="technologies" />
                                        </div>
                                        <div className="col-md-2 col-6 text-center">
                                            <img src="/images/services/React.png" alt="technologies" />
                                        </div>
                                      
                                        <div className="col-md-2 col-6 text-center">
                                            <img src="/images/services/Bootstrap.png" alt="technologies" />
                                        </div>
                                        <div className="col-md-2 col-6 text-center">
                                            <img src="/images/services/dotnet.png" alt="technologies" />
                                        </div> 
                                        <div className="col-md-2 col-6 text-center">
                                            <img src="/images/services/JS.png" alt="technologies" />
                                        </div>
                                        <div className="col-md-2 col-6 text-center">
                                            <img src="/images/services/Veue JS.png" alt="technologies" />
                                        </div>
                                      
                                    </div>
                                </div>
                                <div id="tab4" className="tabs_item">
                                    <div className="row">
                                    <div className="col-md-2 col-6 text-center">
                                            <img src="/images/services/JS.png" alt="technologies" />
                                        </div>
                                        <div className="col-md-2 col-6 text-center">
                                            <img src="/images/services/Veue JS.png" alt="technologies" />
                                        </div>
                                        <div className="col-md-2 col-6 text-center">
                                            <img src="/images/services/Bootstrap.png" alt="technologies" />
                                        </div>
                                    <div className="col-md-2 col-6 text-center">
                                            <img src="/images/services/Wordpress.png" alt="technologies" />
                                        </div>
                                        <div className="col-md-2 col-6 text-center">
                                            <img src="/images/services/React.png" alt="technologies" />
                                        </div>
                                       
                                        <div className="col-md-2 col-6 text-center">
                                            <img src="/images/services/dotnet.png" alt="technologies" />
                                        </div> 
                                    </div>
                                </div>

                             
                            </div>
                        </div>
                </div>

            </div>

        </div>
      </div>
    )
  }
}

export default ServiceTechnologies;
