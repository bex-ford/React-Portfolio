import React from "react";
import justveggie from "../assets/landingpage.png";

const mystyle = {
  backgroundColor: "#C0A392",
  color: "#3D2F2F",
  // paddingLeft: "250px",
  // paddingRight: "250px",
  fontFamily: "Helvetica Neue",
};

function Work() {
  return (
    <div className="row m-2 d-flex justify-content-center">
    <div style={mystyle} className="card-deck d-flex flex-column p-10 col-lg-6 col-sm-12" id="work">
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
            // paddingLeft: "100px",
            // paddingRight: "100px",
          }}
          className="card-title"
        >
          JustVeggie is a vegetarian, gluten-free application created for users
          with these specific needs. I worked on this application with another
          bootcamp student to create this website. It allows users who are
          vegetarian with a gluten intolerance to view recipes. Please click on
          the image below to take you to this application.
        </h5>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-10">
            <a href="https://bex-ford.github.io/project-1/">
            <img
              style={{
                // width: "300px",
                // height: "70%",
                // marginLeft: "150px",
              }}
              src={justveggie}
              className="card-img-top custom-card-img"
              alt="JustVeggie"
            />
          </a>
          </div>
        </div>
        
    </div>
    </div>
  );
}
export default Work;
