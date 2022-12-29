import React from "react";

const HomeContactForm = () => {
  return (
    <div className="contact-form">
      <form>
        <div className="container contactsec">
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email"
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
                  placeholder="Phone"
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
                  placeholder="Website URL"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <select class="form-select" aria-label="Default">
                  <option selected>What are you Interested In?</option>
                  <option value="1">App Design</option>
                  <option value="2">Web Design</option>
                  <option value="3">App Development</option>
                </select>
              </div>
            </div>
            <div className="col-lg-12 col-sm-12">
                <div className="btncontact">
                <button type="submit" className="btn btn-form">
                LET'S DISCUSS YOUR IDEA
              </button>
                </div>
              
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HomeContactForm;
