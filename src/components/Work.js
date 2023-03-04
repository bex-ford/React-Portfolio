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
    <div style={mystyle} className="card-deck">
      <div
        className=" col-sm-12 col-md-1 col-lg-12"
      >
        <h2 style={{ fontWeight: "bold", fontSize:"40px", textAlign:"center" }}>Projects</h2>
        <div className="btn-group">
        <a
          // style={{
          //   backgroundColor: "#e5D3B3",
          //   padding: "20px",
          //   // display: "inline-flex",
          //   color: "#3D2F2F",
          //   fontSize: "15px",
          //   fontWeight: "bold",
          //   fontFamily: "Helvetica Neue",
          //   borderRadius: "5px",
          // }}
          href="https://bex-ford.github.io/project-1/"
          className="btn work-links"
        >
          CASE STUDY
        </a>
        <a
          // style={{
          //   backgroundColor: "#e5D3B3",
          //   padding: "20px",
          //   // display: "inline-flex",
          //   color: "#3D2F2F",
          //   fontSize: "15px",
          //   fontWeight: "bold",
          //   fontFamily: "Helvetica Neue",
          //   borderRadius: "5px",
          // }}
          href="https://bex-ford.github.io/project-1/"
          className="btn work-links"
        >
          GITHUB
        </a>
        </div>
        
        <h5 style={{ fontSize: "20px", textAlign:"center"}}className="card-title">JustVeggie is a vegetarian, gluten-free application created for users with these specific needs.  </h5>
        <img
          src={justveggie}
          className="card-img-top custom-card-img"
          alt="JustVeggie"
        />
              
           </div>
    </div>
  );
}
export default Work;
