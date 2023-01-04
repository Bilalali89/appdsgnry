import React, { Component } from "react";
import Link from "../../utils/ActiveLink";

class NavbarTwo extends Component {
  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <>
        <div id="navbar" className="navbar-area navbar-style-2">
          <div className="container top-nav">
            <div className="d-flex justify-content-end top-nav-inner">
              <span>
                <img src="/images/email-icons-top.png" alt="img" />{" "}
                info@appdsgnry.com
              </span>{" "}
              <span>
                <img src="/images/call-icon-top.png" alt="img" /> +1 618 458
                65441
              </span>
            </div>
          </div>
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="container">
              <Link href="/">
                <a className="navbar-brand">
                  <img
                    src="/images/Logo@2x.png"
                    height="80"
                    className="black-logo"
                    alt="logo"
                  />
                  <img
                    src="/images/Logo@2x.png"
                    height="90"
                    width="auto"
                    className="white-logo"
                    alt="logo"
                  />
                </a>
              </Link>

              {/* Toggle navigation */}
              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav" style={{paddingTop:'40px'}}>
                  <li className="nav-item">
                    <Link href="/about" activeClassName="active">
                      <a className="nav-link">ABOUT US</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/services" activeClassName="active">
                      <a className="nav-link">SERVICES</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/portfolio" activeClassName="active">
                      <a className="nav-link">PORTFOLIO</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/pricing" activeClassName="active">
                      <a className="nav-link">PRICING</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a className="nav-link">CONTACT</a>
                    </Link>
                  </li>
                </ul>

                <div className="others-options" style={{paddingTop:'40px'}}>
                  <Link href="/pricing">
                    <a className="btn btn-primary">REQUEST A QUOTE</a>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default NavbarTwo;
