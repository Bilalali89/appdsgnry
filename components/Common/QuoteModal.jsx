import React from "react";

const QuoteModal = () => {
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
                <textarea
                  name="text"
                  cols="60"
                  rows="6"
                  placeholder="Write your message..."
                  className="form-control"
                  style={{height:'120px', resize:'none'}}
                  required
                />
              </div>
            </div>
           
          </div>
        </div>
      </form>
    </div>
  );
};

export default QuoteModal;
