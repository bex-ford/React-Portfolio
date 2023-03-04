import React from "react";

const mystyle = {
  backgroundColor: "#C0A392",
  color: "#3D2F2F",
  padding: "0",
  
};

function Skills() {
  return (
    <section style={mystyle} className="skills">
      <h2>Skills</h2>
      <p>I enjoy learning new things. Here's a list of technologies that i've worked with</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Bootstrap</li>
        <li>React</li>
        <li>GitHub</li>
      </ul>
    </section>
  );
}
export default Skills;
