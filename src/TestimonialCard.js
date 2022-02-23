import React from "react";
import "./TestimonialCard.css";
function TestimonialCard({ testimony, stars, image, author, role }) {
  return (
    <div className="testimonial__Card px-[20px] py-[47px] h-[392px] text-center ">
      <p>{testimony}</p>
      <div className="stars">
        {/* <img src={stars} alt="Number of stars" /> */}
      </div>
      <img src={image} alt="author image" className="h-10 w-10 mx-auto" />
      <h3>{author}</h3>
      <h5>{role}</h5>
    </div>
  );
}

export default TestimonialCard;
