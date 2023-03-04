import React from "react";

const mystyle = {
  backgroundColor: "#C0A392",
  color: "#3D2F2F",
  padding: "200px",
};
function Home() {
  return (
    <div style={mystyle} className="d-flex flex-column p-2">
      <div style={mystyle}>
        <h1
          style={{
            mystyle,
            fontSize: "2.5rem",
            paddingTop: "10px",
            fontWeight: "bold",
          }}
          className="display-4"
        >
          Hi, I'm Bex Ford
        </h1>
        <p
          style={{ fontSize: "5.5rem", fontWeight: "3rem", color: "#e5D3B3" }}
          className="lead"
        >
          front-end web developer
        </p>
        <p
          style={{
            fontSize: "1.5rem",
            color: "#3D2F2F",
            paddingBottom: "40px",
            paddingRight: "450px",
          }}
          className="lead"
        >
          I am currently learning front end web development with skills for life
          bootcamp. I love learning new skills and working with different
          technologies like React, JavaScript and CSS. If i'm not listening to
          audiobooks i'm listening to spotify.
        </p>
        <a
          style={{
            backgroundColor: "#e5D3B3",
            padding: "20px",
            color: "#3D2F2F",
            fontSize: "1.5rem",
            fontWeight: "bold",
            fontFamily: "courier",
            borderRadius: "5px",
          }}
          href="/#work"
          class="navbar-brand"
        >
          VIEW PROJECT
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  );
}
export default Home;
