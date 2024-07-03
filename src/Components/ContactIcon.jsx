import React from "react";

const ContactIcon = ({ icon, color, link }) => {
  return (
    <a className="Btn" target="_blank" href={link}>
      <span className="svgContainer">
        <img src={icon} alt="" />
      </span>
      <span className="BG" style={{ background: color }}></span>
    </a>
  );
};

export default ContactIcon;
