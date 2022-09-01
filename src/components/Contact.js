import React from "react";
import linkedInIcon from "./landing_page/linkedin (1).png";
import InstaIcon from "./landing_page/instagram (3).png";
import EmailIcon from "./landing_page/email (1).png";
import HeartIcon from "./landing_page/heart.png";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="main__div" id="contact">
      <div>
        <h1>Contact Us</h1>
      </div>
      <div className="spacing">
        <a className="link__style" href="https://www.linkedin.com/company/qbitsnmit/mycompany/">
          <img className="icon__style" src={linkedInIcon} alt="icon" />
        </a>
        <a className="link__style" href="https://instagram.com/qtechclub_nmit?igshid=YmMyMTA2M2Y=">
          <img className="icon__style" src={InstaIcon} alt="icon" />
        </a>
        <a className="link__style" href="mailto:quantumtechclub.nmit@gmail.com">
          <img className="icon__style" src={EmailIcon} alt="icon" />
        </a>
      </div>
      <div className="text_spacing">
        <h4 className="contact__title">QUANTUM TECH CLUB |  NMIT BANGALORE</h4>

        <h6 className="gradient__text">DESIGNED BY Q-BITS WEB TEAM</h6>
        <div className="heart_text">
          <h5>Made with </h5>
          <img className="hearticon__style" src={HeartIcon} alt="icon" />
        </div>
        <h6>The future is here.</h6>
      </div>
    </div>
  );
};

export default Contact;
