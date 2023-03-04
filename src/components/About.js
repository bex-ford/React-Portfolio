import React from "react";

const mystyle = {
  backgroundColor: "#C0A392",
  color: "#3D2F2F",
  padding: "0",
  
};

function About() {
  return (
    <section style={mystyle} class="page-section" id="about">
      <h2>About</h2>
      <div>
        <p>Hey. I'm Bex, nice to meet you! Please take a look around.</p>
      </div>
    </section>
  );
}
export default About;
