import React from "react";

const Header = () => {
  const names = ["Zohaib", "Ali", "Sara", "Bisma"];

  //KEY VALUE PAIR
  const userData = {
    name: "Zohaib",
    dob: "7th Oct, 2025",
    bloodGroup: "A-",
    pNo: "0348246910",
    age: 23,
  };

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
    <header>
      
      <h1>NSFB11</h1>


      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
