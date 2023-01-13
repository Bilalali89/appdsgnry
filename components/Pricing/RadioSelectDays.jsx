import React, { useState } from "react";

const RadioSelectDays = () => {
  const [currentRadioValue, setCurrentRadioValue] = useState("");

  const handleRadioChange = (e) => {
    setCurrentRadioValue(e.target.value);
  };

  return (
    <>
      <div>
        <div className="row">
          <div className="col-12">
            <input
              id="radio-item-1"
              name="radio-item-1"
              type="radio"
              value="radio-1"
              onChange={handleRadioChange}
              checked={currentRadioValue === "radio-1"}
            />
            <label htmlFor="radio-item-1"> Standard 14 Days</label>
          </div>
          
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-10">
            {" "}
            <input
              id="radio-item-2"
              name="radio-item-2"
              type="radio"
              value="radio-2"
              onChange={handleRadioChange}
              checked={currentRadioValue === "radio-2"}
            />
            <label htmlFor="radio-item-2"> 7 Days</label>
          </div>
          <div className="col-2">
            <div className="price">$199</div>
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-10">
            {" "}
            <input
              id="radio-item-3"
              name="radio-item-3"
              type="radio"
              value="radio-3"
              onChange={handleRadioChange}
              checked={currentRadioValue === "radio-3"}
            />
            <label htmlFor="radio-item-3"> 5 Days</label>
          </div>
          <div className="col-2">
            <div className="price">$299</div>
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-10">
            {" "}
            <input
              id="radio-item-4"
              name="radio-item-4"
              type="radio"
              value="radio-4"
              onChange={handleRadioChange}
              checked={currentRadioValue === "radio-4"}
            />
            <label htmlFor="radio-item-4">Urgent</label>
          </div>
          <div className="col-2">
            <div className="price">$599</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RadioSelectDays;
