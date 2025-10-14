import React from "react";
import "./aboutme.css";
import image from "../../images/vectorimage.png";

const AboutMe = () => {
  return (
    <div className="aboutme">
      <div className="aboutme-image">
        <img src={image} alt="" />
      </div>

      <div className="aboutme-right">
        <h1>About Me</h1>

        <p>A dedicated Frontend Developer based in Karachi, Pakistan. 📍</p>

        <p>
          {" "}
          As a Frontend Developer, I possess an impressive arsenal of skills in
          HTML5 , CSS3, JavaScript, ReactJS. I excel in designing and
          maintaining responsive websites that offer a smooth user experience.
          My expertise lies in craftingdynamic, engaging interfaces through
          writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team playerwho thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
