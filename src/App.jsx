import React from "react";

const App = () => {
  let myName = "Muhammad Shehroz";

  let studentsName = ["Shehroz", "Zohaib", "Abid"];



  return (
    <div>
      <h1>FRONTEND DEVELOPMENT</h1>

      {studentsName.map((item, index) => (
        <ul key={index}>
          <li>{item}</li>
        </ul>
      ))}

     
    </div>
  );
};

export default App;
