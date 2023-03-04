import React from "react";

const mystyle = {
  backgroundColor: "#C0A392",
  color: "#3D2F2F",
  textAlign: "center",
};

function Contact() {
  return (
    <section style={mystyle} className="page-section contact" id="contact">
      <h2>Get in touch</h2>
      <p>Email: becky782@hotmail.co.uk</p>
      <footer className="footer">
        <h6>copyright &copy; Bex Ford 2023</h6>
      </footer>
    </section>
  );
}
export default Contact;
