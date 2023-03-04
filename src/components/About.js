import React from "react";

const mystyle = {
  backgroundColor: "#C0A392",
  color: "#3D2F2F",
  paddingLeft: "250px",
  paddingRight: "250px",
  
};

function About() {
  return (
    <section style={mystyle} class="page-section" id="about">
      <h2 style={{fontWeight: "bold", textDecoration: "underline"}}>About</h2>
      <div>
        <p style={{fontSize: "1.5rem"}}> <code>Hey. I'm Bex, nice to meet you! Please take a look around.</code></p>
      </div>
    </section>
  );
}
export default About;
