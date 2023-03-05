import React from "react";

const mystyle = {
  backgroundColor: "#3D2F2F",
  color: "#C0A392",
  textAlign: "center",
  padding: "10px",
};

function Contact() {
  return (
    <section style={mystyle} className="page-section contact" id="contact">
      <h2>Get in touch</h2>
      <p>Email: becky782@hotmail.co.uk</p>
      <h6>Copyright &copy; Bex Ford 2023</h6>
    </section>
  );
}
export default Contact;
