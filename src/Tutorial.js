import React from "react";
import "./Tutorial.css";
function Tutorial({ title, video }) {
  return (
    <div className="tutorial mt-[113px]">
      <h2 className="text-center text-[20px] font-medium mb-[36px]">
        {" "}
        {title}
      </h2>

      <div className="tutorial__Image">
        <img
          src={video}
          alt="video link"
          className="w-[90vw] max-w-[363px] max-h-[227px] mx-auto"
        />
        <div className="tutorial__Border hidden lg:block"></div>
      </div>
    </div>
  );
}

export default Tutorial;
