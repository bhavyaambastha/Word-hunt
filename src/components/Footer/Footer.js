import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 1 }} />
      <span className="name">
      Made with ❤️ by{" "}
        <a href="https://www.linkedin.com/in/bhavyaambastha" target="__blank">
          Bhavya Ambastha
        </a>
      </span>
      <div className="iconContainer">
        <a href="https://www.instagram.com/ambastha_bhavya/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/bhavyaambastha" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
