import React from "react";

const mystyle = {
  backgroundColor: "#C0A392",
  color: "#3D2F2F",
  paddingLeft: "250px",
  paddingRight: "250px",
  
};

function About() {
  return (
    <div style={mystyle} className="d-flex flex-column p-10">
      <h2 style={{fontWeight: "bold"}}>About</h2>
      <div>
        <p style={{fontSize: "1.5rem"}}>Hey. It's nice to meet you! Please take a look around.</p>
      </div>
  </div>
  );
}
export default About;
