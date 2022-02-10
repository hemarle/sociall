import React from "react";
import "./TestimonialCard.css";
function TestimonialCard({ testimony, stars, image, author, role }) {
  return (
    <div className="testimonial__Card">
      <p>{testimony}</p>
      <div className="stars">
        <img src={stars} alt="Number of stars" />
      </div>
      <img src={image} alt="author image" />
      <h3>{author}</h3>
      <h5>{role}</h5>
    </div>
  );
}

export default TestimonialCard;
