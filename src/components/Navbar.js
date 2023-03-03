import React from "react";

const styles = {
  card: {
    margin: 20,
    background: "#987554"
  },
  heading: {
    background: "#987554",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px"
  }
};

function Navbar() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>About</div>
      <div> style={styles.heading}Work</div>
      <div> style={styles.heading}Contact</div>
      <div> style={styles.heading}CV</div>
    </div>
  );
}

export default Navbar;
