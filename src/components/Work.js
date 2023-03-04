import React from "react";

const mystyle = {
  backgroundColor: "#C0A392",
  color: "#3D2F2F",
  paddingLeft: "250px",
  paddingRight: "250px",
  
};

function Work() {
  return (
    <div style={mystyle} className="card-deck">
      <div className="card col-sm-12 col-md-4 col-lg-4">
        <h2>Projects</h2>
        <img
          src="/src/assets/justveggie.png"
          class="card-img-top custom-card-img"
          alt="JustVeggie"
        />
        <div className="">
          <h5 className="card-title">JustVeggie</h5>
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
