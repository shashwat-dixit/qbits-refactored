import React from "react";
import { useState, useEffect } from "react";
import "./Hero.css";
import Popup from "./popup";

const Hero = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 1000);
  }, []);
  return (
    <div className="hero">
      <div className="content">
        <p className="link__styl">Q-BITS</p>
        <p className="link__styl">QUANTUM TECH CLUB</p>
        <p className="link__styl">
          <pre>LEARN DESIGN DEVELOP</pre>
        </p>
        <div className="popup-event">
          <button className="button-27" onClick={() => setButtonPopup(true) }>Quant-A-Maze</button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h1>Quant-A-Maze is here!</h1>
            <p>
              Quant-A-Maze is our annual hackathon involving quantum technologies. This
              is out first iteration of many to come hackathons.
            </p>
            <div className="button-center">
            <a href="https://bit.ly/3BcFEfN">
              <button id="submit">Let's Go!</button>
            </a>
            </div>
          </Popup>
        </div>
        <div className="popup-event">
          <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
            <h1>Quant-A-Maze is here!</h1>
            <p>
              Quant-A-Maze is our annual hackathon involving quantum technologies. This
              is our first iteration of many to come hackathons.
            </p>
            <div className="button-center">
            <a href="https://bit.ly/3BcFEfN">
              <button id="submit">Let's Go!</button>
            </a>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  );
};

export default Hero;
