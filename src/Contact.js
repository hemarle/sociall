import React from "react";
import "./Contact.css";
function Contact({ title, about, linkText, link }) {
  return (
    <div className="contact min-h-[160px] py-[76px]">
      <h2 className="title text-center mb-[34px] md:text-[30px] lg:[35px]">
        {title}
      </h2>
      <p className="max-w-[341px] min-h-[88px] mb-[34px] leading-[26px] text-center mx-auto lg:max-w-[600px]">
        {about}
      </p>
      <a href={link} accessKey="c" className="contact__Link mx-auto ">
        {linkText}
      </a>
    </div>
  );
}

export default Contact;
