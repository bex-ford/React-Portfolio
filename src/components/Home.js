import React from "react";

const mystyle = {
  backgroundColor: "#C0A392",
  color: "#3D2F2F",
   
};
function Home() {
  return (
    <div style={mystyle} className="d-flex flex-column p-5">
      <div style={mystyle}>
        <h1 style={{mystyle, paddingTop: "100px"}} className="display-4">Bex Ford.</h1>
        <p style={{fontSize: "2rem", fontWeight: "1.5"}} className="lead">front-end web developer.</p>
        <p style={{display:"inline-block"}} className="lead">
          I am currently learning front end web development with skills for life
          bootcamp. I love learning new skills and working with different
          technologies like React, JavaScript and CSS. If i'm not listening to audiobooks i'm
          listening to spotify.
        </p>
      </div>
      <img src="/src/assets/bf.jpg" alt="persons profile" class="custom-img" />
    </div>
  );
}
export default Home;
