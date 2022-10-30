import React from "react";
import "./Footer.css";
import logo from "../../assets/icons/logo.png";
import twitter from "../../assets/icons/twitter.png";
import fb from "../../assets/icons/fb.png";
import linkedIn from "../../assets/icons/linkedIn.png";
import email from "../../assets/icons/email.png";
import phone from "../../assets/icons/phone.png";
import pin from "../../assets/icons/pin.png";
import upArrow from "../../assets/icons/upArrow.png";

const Footer = () => {
  return (
    <div className="container">
      <div>
        <h1 className="doctorInfoTitle">
          <img src={logo} alt="" />
          <span>Doctor Guide</span>
        </h1>
        <p className="doctorInfo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut cras
          velit senectus id tellus aliquam enim felis. Sed commodo cursus tellus
          sapien, viverra imperdiet morbi dignissim. Consequat in metus arcu
          eget.
        </p>
        <div className="doctorSocial">
          <p>
            <img src={twitter} alt="" />
          </p>
          <p>
            <img src={linkedIn} alt="" />
          </p>
          <p>
            <img src={fb} alt="" />
          </p>
        </div>
      </div>
      <div className="footer">
        <h1 className="footerHeader">Our Services</h1>
        <p>
          <p>Bills & Insurance</p>
          <hr />
        </p>
        <p>
          <p>Cancer Screening</p>
          <hr />
        </p>
        <p>
          <p>Cardiac Surgery</p>
          <hr />
        </p>
        <p>
          <p>Neurology</p>
          <hr />
        </p>
        <p>
          <p>Covid-19 Vaccine</p>
          <hr />
        </p>
      </div>
      <div className="footer">
        <h1 className="footerHeader">Contact Us</h1>
        <p>
          <img src={pin} alt="" />
          <p>1234 Uttara Khal Pahr, Image Osman Center, Sonargao, Janapath,</p>
        </p>
        <p>
          <img src={phone} alt="" />
          <p>+09876543211</p>
        </p>
        <p>
          <img src={email} alt="" />
          <p>doctorguide@example.com</p>
        </p>
      </div>
      <div className="footer">
        <h1 className="footerHeader">Doctors Schedule</h1>
        <p>
          <p>
            At vero eos et accusam et justou dolores et ea rebum tet clita kasd
            gubergren no sea takimata.
          </p>
          <p className="schedule">
            <img src={upArrow} alt=""></img>View Schedule
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
