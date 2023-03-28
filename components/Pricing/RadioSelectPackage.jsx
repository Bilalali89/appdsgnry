import React, { useState } from "react";


const RadioSelectPackage = () => {
  const [currentRadioValue, setCurrentRadioValue] = useState("");

  const handleRadioChange = (e) => {
    setCurrentRadioValue(e.target.value);
  };
  return (
    <div>
      <div className="selectedpackage">
        <div className="row">
          <div className="col-8">
            <div className="radiosection">
              <input
                id="select-item-1"
                name="select-item-1"
                type="radio"
                value="radio-1"
                onChange={handleRadioChange}
                checked={currentRadioValue === "radio-1"}
              />
              <label htmlFor="select-item-1"> Website Design (Essential)</label>
            </div>
            <div className="selectmessage">
              No thanks. I’ll just start with the basics for now.
            </div>
          </div>
          <div className="col-4">
            <div className="selectedprice">From $140</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="selectfeature">
              <ul className="featurelist">
                <li>
                  <i className="icofont-check"></i> Responsive Website
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className="recommendspackage">
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="radiosection">
              <input
                id="select-item-2"
                name="select-item-2"
                type="radio"
                value="radio-2"
                onChange={handleRadioChange}
                checked={currentRadioValue === "radio-2"}
              />
              <label htmlFor="select-item-2">
                {" "}
                Website Design + Web Application
              </label>
            </div>
            <div className="selectmessage">
              Get everything you need to kick off your brand.
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="selectedprice">
              <div className="row">
                <div className="col-2">
                  <i class="icofont-star"></i>
                </div>
                <div className="col-10">
                  <div className="slogan">Most Popular</div>
                  <div className="pricing">Starting from $290</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="selectfeature">
              <ul className="featurelist">
                <li>
                  <i className="icofont-check"></i> Responsive Website
                </li>
                <li>
                  <i className="icofont-check"></i> Desktop App
                </li>
                <li>
                  <i className="icofont-check"></i> iOS App
                </li>
                <li>
                  <i className="icofont-check"></i> Android App
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioSelectPackage;
