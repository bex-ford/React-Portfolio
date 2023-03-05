import React from "react";
import justveggie from "../assets/landingpage.png";

const mystyle = {
  backgroundColor: "#C0A392",
  color: "#3D2F2F",
  paddingLeft: "250px",
  paddingRight: "250px",
  fontFamily: "Helvetica Neue",
};

function Work() {
  return (
    <div style={mystyle} className="card-deck" id="work">
      <div className=" col-sm-12 col-md-1 col-lg-12">
        <h2
          style={{ fontWeight: "bold", fontSize: "40px", textAlign: "center" }}
        >
          Recent Work
        </h2>
        <div className="btn-group">
          <a
            href="https://github.com/bex-ford/project-1"
            className="btn work-links"
          >
            GitHub
          </a>
        </div>

        <h5
          style={{
            fontSize: "20px",
            textAlign: "center",
            paddingLeft: "300px",
            paddingRight: "300px",
          }}
          className="card-title"
        >
          JustVeggie is a vegetarian, gluten-free application created for users
          with these specific needs. I worked on this application with another
          bootcamp student to create this website. It allows users who are
          vegetarian with a gluten intolerance to view recipes.
        </h5>
        <a href="https://bex-ford.github.io/project-1/">
          <img
            style={{
              width: "50%",
              height: "50%",
              marginLeft: "350px",
              marginRight: "350px",
            }}
            src={justveggie}
            className="card-img-top custom-card-img"
            alt="JustVeggie"
          />
        </a>
      </div>
    </div>
  );
}
export default Work;
