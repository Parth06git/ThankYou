import React from "react";

const Header = () => {
  return (
    <header className="iitp-hero">
      <img
        src={require("./img/logo.png")}
        alt="IIT Tirupati Logo"
        className="iitp-logo"
      />
      <h1>In Gratitude to Our Mentors</h1>
      <h2>Faculty of Civil & Environmental Engineering, IIT Tirupati</h2>
    </header>
  );
};

export default Header;
