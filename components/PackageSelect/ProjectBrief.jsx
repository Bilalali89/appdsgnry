import React, { useState, useCallback } from "react";
import { SketchPicker } from "react-color";
import Input from "../Pricing/Input";
import SelectDropdown from "../Pricing/SelectDropdown";
import TextArea from "../Pricing/TextArea";
import RadioSelectDays from "../Pricing/RadioSelectDays";
import RadioSelectPackage from "../Pricing/RadioSelectPackage";
import Link from "next/link";
import { IndustryList } from "../Pricing/IndustryList";
import { LogoTypeList } from "../Pricing/LogoTypeList";

const ProjectBrief = () => {
  const refreshPage = () => {
    window.location.reload();
  };
  const [colorPrimary, setPrimaryColor] = useState("");
  const [colorSecondary, setSecondaryColor] = useState("");
  const [colorAccent, setAccentColor] = useState("");
  const [valueIndustry, setValueIndustry] = useState('first');
  const [valueLogo, setValueLogo] = useState('first');
  const handleChange = useCallback((event) => {
    setValueIndustry(event.target.valueIndustry);
    setValueLogo(event.target.valueLogo);
  }, []);
  return (
    <div className="projectbrief">
      <div className="container">
        <form action="">
          <div className="row">
            <div className="col-md-12 col-lg-10 order-lg-1 order-2">
              <div className="heading">Project Brief</div>
              <div className="subheading">
                Fill out the brief so the designers know what you’re looking
                for.
              </div>
            </div>
            <div className="col-md-12 col-lg-2 order-lg-2 order-1">
              <img src="/images/guarantee.png" alt="guarantee" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-6">
              
              <div className="title">
              What's your Business Name?
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder=''
                  className="form-control"
                  required
                />
              </div>
              <div className="hint">
              E.g. Acme
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
             
              <div className="title">
              Do you have a business Slogan?
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder=''
                  className="form-control"
                  required
                />
              </div>
              <div className="hint">
              Tip: Leave blank if you don’t want one incorporated.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-6">
              
              <div className="title">Select your industry</div>
      <select className="form-select" value={valueIndustry} onChange={handleChange} aria-label="Default">
       {IndustryList.map((inddata) => {
        return <option key={inddata.id} value={inddata.number}>{inddata.value}</option>
       })}
        
       
       
      </select>
      <div className="hint">Tip: Leave blank if you don’t want one incorporated.</div>
            </div>
            <div className="col-md-12 col-lg-6">
              
               <div className="title">Please select the logo type?</div>
      <select className="form-select" value={valueLogo} onChange={handleChange} aria-label="Default">
      {LogoTypeList.map((logolistdata) => {
        return <option key={logolistdata.id} value={logolistdata.number}>{logolistdata.value}</option>
       })}
        
       
      </select>
      <div className="hint">E.g. Mascot, illustration,Typography etc…</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <TextArea
                title="Describe what your organisation or product does and its target audience"
                hint="E.g. We sell anvils and other industrial goods to manufacturing companies and hobbyists all over the world."
              />
            </div>
            <div className="col-md-12 col-lg-6">
              <TextArea
                title="Please mention top 3 competitor or any reference link that describe your inspiration."
                hint="Tip: Leave blank if you don’t want one incorporated."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <TextArea
                title="Is there anything else you would like to communicate to the designers?"
                hint="Tip: Leave blank if you don’t want one incorporated."
              />
            </div>
            <div className="col-md-12 col-lg-6">
              <TextArea
                title="Please list down the content pages you will have on your website pages?"
                hint="E.g. About Us, Privacy Policy, Home, Contact Us, Product Page, Product Detail, Sign In,Sign Up, Services etc…"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="title">Primary Color</div>
                  <div className="ColorpickerDiv form-group">
                    <input
                      type="color"
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      value={colorPrimary}
                    />
                    <input
                      type="text"
                      value={colorPrimary}
                      id="hex"
                      onChange={(e) => setPrimaryColor(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="title">Secondary Color</div>
                  <div className="ColorpickerDiv form-group">
                    <input
                      type="color"
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      value={colorSecondary}
                    />
                    <input
                      type="text"
                      value={colorSecondary}
                      id="hex"
                      onChange={(e) => setSecondaryColor(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="title">Accent Color</div>
                  <div className="ColorpickerDiv form-group">
                    <input
                      type="color"
                      onChange={(e) => setAccentColor(e.target.value)}
                      value={colorAccent}
                    />
                    <input
                      type="text"
                      value={colorAccent}
                      id="hex"
                      onChange={(e) => setAccentColor(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="title">
                Do you have any images, sketches or documents that might be
                helpful?
              </div>
              <div className="uploadbox">
                <label id="upload">
                  <img
                    src="/images/upload.png"
                    width="60"
                    height="auto"
                    alt="upload"
                  />
                  <input type="file" id="upload" />
                  <div>Select File</div>
                </label>
              </div>
              <div className="hint">
                E.g. Your current logo, fonts, photos, illustrations, content,
                layout ideas etc.
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-12">
              <div className="heading">Package Details</div>
              <div className="subheading">
                We suggest you more than a company website. Interested ?
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <RadioSelectPackage />
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="durationbox">
                <div className="heading">Duration</div>
                <div className="subheading">
                  How long do you want your project delivery time?
                </div>
                <div className="durationoptions">
                  <RadioSelectDays />
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-lg-3">
              <img src="/images/moneybackguarantee.png" alt="img" />
            </div>
            <div className="col-lg-9 justify-content-end d-flex align-items-center">
              <div>
                <button className="btn btn-back">BACK TO PRICING</button>
                <button className="btn btn-reset" onClick={refreshPage}>
                  RESET
                </button>

                <Link href="/PaymentSelect">
                  <button type="submit" className="btn btn-proceed">
                    PROCEED
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectBrief;
