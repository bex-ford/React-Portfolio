import React from "react";

const mystyle = {
  backgroundColor: "#C0A392",
  color: "#3D2F2F",
  paddingLeft: "250px",
  paddingRight: "250px",
  
};

function Skills() {
  return (
    <section style={mystyle} className="skills">
      <h2 style={{fontWeight: "bold", textDecoration: "underline"}}>Skills</h2>
      <p style={{fontSize: "1.5rem"}}><code>I enjoy learning new things. Here's a list of technologies that i've worked with</code></p>
      <ul style={{fontSize: "1.5rem"}}>
        <code>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Bootstrap</li>
        <li>React</li>
        <li>GitHub</li>
        </code>
      </ul>
    </section>
  );
}
export default Skills;
