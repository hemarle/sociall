import React from "react";
import "./Navigation.css";

function Navigation({ logo, header, links, login, signup }) {
  return (
    <div className="navigation hidden justify-between align-center md:px-6 py-10 md:flex lg:px-[10vw] ">
      <div className="logo">
        <img src={logo} alt="" />
        <h5 className="">{header}</h5>
      </div>
      <ul className="links flex justify-around w-[100%] max-w-[400px]">
        {links.map(({ link, linkUrl }) => (
          <li>
            <a href={linkUrl}> {link}</a>
          </li>
        ))}
      </ul>
      <div className="auth min-w-max">
        <a href={login} className="text-red">
          Login
        </a>
        <a
          href={signup}
          className="p-2 ml-8 text-red border-2 border-dotted border-red rounded "
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

export default Navigation;
