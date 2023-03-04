import React from "react";
import justveggie from "../assets/justveggie.png";

const mystyle = {
  backgroundColor: "#C0A392",
  color: "#3D2F2F",
  paddingLeft: "250px",
  paddingRight: "250px",
};

function Work() {
  return (
    <div style={mystyle} className="card-deck">
      <div
        style={{ display: "inline" }}
        className="card col-sm-12 col-md-3 col-lg-3"
      >
        <h2 style={{fontWeight: "bold"}}>Projects</h2>
        <h5 className="card-title">JustVeggie</h5>
        <img
          src={justveggie}
          class="card-img-top custom-card-img"
          alt="JustVeggie"
        />
        <div className="">
       
          <p className="card-text">
            <p>
              <a
                href="https://bex-ford.github.io/project-1/"
                target="_blank"
                rel="noreferrer"
              >
                <strong>
                  <u>JustVeggie Application</u>
                </strong>
              </a>
            </p>
            <p>
              <a
                href="https://github.com/bex-ford/project-1"
                rel="noreferrer"
                target="_blank"
              >
                <strong>
                  <u>GitHub</u>
                </strong>
              </a>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Work;
