import React from "react";

const mystyle = {
  backgroundColor: "#C0A392",
  color: "#3D2F2F",
  marginTop: "105px",
  marginBottom: "105px",
};
function Home() {
  return (
    <div style={mystyle} className="d-flex flex-column p-3" id="home">
      <div style={mystyle}>
        <h1
          style={{
            mystyle,
            fontSize: "2.5rem",
            paddingTop: "10px",
            fontWeight: "bold",
            textAlign: "center",
          }}
          className="display-4"
        >
          Hi, I'm Bex Ford
        </h1>
        <p
          style={{
            fontSize: "5.5rem",
            fontWeight: "3rem",
            color: "#e5D3B3",
            textAlign: "center",
          }}
          className="lead"
        >
          Front-End Web Developer
        </p>
      </div>
    </div>
  );
}
export default Home;
