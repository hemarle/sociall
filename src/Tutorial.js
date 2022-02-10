import React from "react";
import "./Tutorial.css";
function Tutorial({ title, video }) {
  return (
    <div className="tutorial">
      <h2> {title}</h2>

      <div className="tutorial__Image">
        <img src={video} alt="video link" />
        <div className="tutorial__Border "></div>
      </div>
    </div>
  );
}

export default Tutorial;
