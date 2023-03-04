import React from "react";

const mystyle = {
    backgroundColor: "#C0A392",
    color: "#3D2F2F",
    fontStyle: "bold",
    padding: "0px",
    
  };
function Navbar() {
  return (
    <nav style={{mystyle}} class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div style={mystyle} class="collapse navbar-collapse" id="navbarNav">
        <ul style={mystyle} class="navbar-nav">
          <li style={mystyle} class="nav-item active">
            <a style={mystyle} class="nav-link" href="/home">
              Home <span class="sr-only"></span>
            </a>
          </li>
          <li class="nav-item">
            <a style={mystyle} class="nav-link" href="/about">
              About
            </a>
          </li>
          <li class="nav-item">
            <a style={mystyle} class="nav-link" href="/skills">
              Skills
            </a>
          </li>
          <li class="nav-item">
            <a style={mystyle} class="nav-link" href="/work">
              Work
            </a>
          </li>
          <li class="nav-item">
            <a style={mystyle} class="nav-link" href="/contact">
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a
              style={mystyle}
              class="nav-link"
              href="/src/assets/bfcv.pdf"
              rel="noopener"
              target="_blank"
            >
              CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
