import React from "react";
import "./Tutorial.css";
function Tutorial({ title, video }) {
  return (
    <div className="tutorial my-[113px]">
      <h2 className="text-center text-[20px] font-medium mb-[36px] lg:mb-[102px] lg:text-[35px]">
        {" "}
        {title}
      </h2>

      <div className="tutorial__Image relative">
        <img
          src={video}
          alt="video link"
          className="w-[90vw] max-w-[363px] max-h-[227px] mx-auto lg:max-w-[1025px] max-h-[470px]"
        />
        <div className="tutorial__Border hidden lg:block lg:absolute lg:-top-10 lg:left-[65px] lg:w-[1003px] lg:h-[544px]"></div>
      </div>
    </div>
  );
}

export default Tutorial;
