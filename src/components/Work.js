import React from "react";
import justveggie from "../assets/justveggie.png";

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
        style={{ display: "inline" }}
        className="card col-sm-12 col-md-1 col-lg-12"
      >
        <h2 style={{ fontWeight: "bold", fontSize:"40px", textAlign:"center" }}>Projects</h2>
        <a
          style={{
            backgroundColor: "#e5D3B3",
            padding: "20px",
            // display: "inline-flex",
            color: "#3D2F2F",
            fontSize: "15px",
            fontWeight: "bold",
            fontFamily: "Helvetica Neue",
            borderRadius: "5px",
          }}
          href="https://bex-ford.github.io/project-1/"
          class="navbar-brand"
        >
          CASE STUDY
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        ></button>
             <a
          style={{
            backgroundColor: "#e5D3B3",
            padding: "20px",
            // display: "inline-flex",
            color: "#3D2F2F",
            fontSize: "15px",
            fontWeight: "bold",
            fontFamily: "Helvetica Neue",
            borderRadius: "5px",
          }}
          href="https://bex-ford.github.io/project-1/"
          class="navbar-brand"
        >
          GITHUB
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        ></button>
        <h5 style={{ fontSize: "20px", textAlign:"center"}}className="card-title">JustVeggie is a vegetarian, gluten-free application created for users with these specific needs.  </h5>
        <img
          src={justveggie}
          class="card-img-top custom-card-img"
          alt="JustVeggie"
        />
              
           </div>
    </div>
  );
}
export default Work;
