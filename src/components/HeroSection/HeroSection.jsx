import React from "react";
import mypicture from "../../assets/zp.png";
import "./herosection.css";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="herosection">
      <div className="herosection-leftdiv">
        <h1>Muhammad Zohaib</h1>
        <span>Frontend Developer</span>
        <p>
          Hello, a frontend developer based in Karachi, Pakistan. Looking
          forward for more projects and freelance work.{" "}
        </p>

        <div>
          <FaHtml5 className="htmlicon icon" />
          <FaCss3 className="cssicon icon" />
          <FaJs className="jsicon icon" />
          <FaReact className="reacticon icon" />
        </div>
      </div>

      <div className="herosection-image">
        <img src={mypicture} />
      </div>
    </div>
  );
};

export default HeroSection;
