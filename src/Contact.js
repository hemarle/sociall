import React from "react";
import "./Contact.css";
function Contact({ title, about, linkText, link }) {
  return (
    <div classname="contact">
      <h2 className="title">{title}</h2>
      <p>{about}</p>
      <a href={link} accessKey="c">
        {linkText}
      </a>
    </div>
  );
}

export default Contact;
