import React from "react";
import linkedInIcon from "./landing_page/linkedin (1).png";
import InstaIcon from "./landing_page/instagram (3).png";
import EmailIcon from "./landing_page/email (1).png";
/*import discord from "./landing_page/discord2.jpg";*/
import "./Contact.css";
const Contact = () => {
  return (
    <div className="main__div" id="contact">
      <div>
        <h1>Contact Us</h1>
      </div>
      <div className="spacing">
        <a className="link__style" href="https://www.linkedin.com/company/qbitsnmit/">
          <img className="icon__style" src={linkedInIcon} alt="icon" />
        </a>
        <a className="link__style" href="https://www.instagram.com/qtechclub_nmit/">
          <img className="icon__style" src={InstaIcon} alt="icon" />
        </a>
        <a className="link__style" href="mailto:quantumtechclub.nmit@gmail.com">
          <img className="icon__style" src={EmailIcon} alt="icon" />
        </a>
        {/*
        <a className="link__style discord" href="https://discord.gg/G6r9vnYxqd">
          <img className="icon__style" src={discord} alt="icon" />
        </a>
        */}
      </div>
    
      <div className="text_spacing">
        <h4 className="contact__title">QUANTUM TECH CLUB |  NMIT BANGALORE</h4>
      </div>
    </div>
  );
};

export default Contact;
