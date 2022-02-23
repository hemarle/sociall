import React from "react";
import "./Navigation.css";

function Navigation({ logo, header, links, login, signup }) {
  return (
    <div className="navigation">
      <div className="logo">
        <img src={logo} alt="" />
        <h5 className="">{header}</h5>
      </div>
      <ul className="links">
        {links.map(({ link, linkUrl }) => (
          <li>
            <a href={linkUrl}> {link}</a>
          </li>
        ))}
      </ul>
      <div className="auth">
        <a href={login}>Login</a>
        <a href={signup}>Get Started</a>
      </div>
    </div>
  );
}

export default Navigation;
