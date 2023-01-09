import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";

const ContactForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="contact-form contact ptb-100" id="contact" >
      <form>
        <div className="container" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-lg-6" >
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  name="number"
                  placeholder="Phone number"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <textarea
                  name="text"
                  cols="30"
                  rows="6"
                  placeholder="Write your message..."
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-lg-12 col-sm-12">
              <button type="submit" className="btn btn-contact">
                Submit Now
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
