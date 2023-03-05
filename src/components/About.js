import React from "react";

const mystyle = {
  backgroundColor: "#C0A392",
  color: "#3D2F2F",
  paddingLeft: "250px",
  paddingRight: "250px",
  fontFamily: "Helvetica Neue",
};

function About() {
  return (
    <div style={mystyle} className="d-flex flex-column p-10" id="about">
      <h2 style={{ fontWeight: "bold", textAlign: "center", fontSize: "40px" }}>
        About
      </h2>
      <div>
        <p
          style={{
            fontSize: "20px",
            textAlign: "center",
            paddingLeft: "300px",
            paddingRight: "300px",
          }}
        >
          Hey. It's nice to meet you! I am currently learning front end web
          development with edX skills for life bootcamp. I love learning new
          skills and working with different technologies like React, JavaScript
          and CSS. If i'm not listening to audiobooks, i'm listening to spotify.
        </p>
        <hr></hr>
      </div>
    </div>
  );
}
export default About;
