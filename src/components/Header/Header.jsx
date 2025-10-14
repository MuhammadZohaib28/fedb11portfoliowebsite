import React from "react";
import "./header.css";

const Header = () => {
  const menuItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About Me",
      link: "#aboutme",
    },
    {
      name: "Education",
      link: "#education",
    },
    {
      name: "Experience",
      link: "#experiecne",
    },
  ];

  return (
    <header className="header">
      <h1>NSFB11</h1>

      <ul className="menu-items">
        {menuItems.map((item, index) => (
          <li key={index} onClick={() => item.link}>
            {item.name}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
