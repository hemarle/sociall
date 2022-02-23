import React from "react";
import "./TestimonialCard.css";
function TestimonialCard({ testimony, stars, image, author, role }) {
  return (
    <div className="testimonialCard px-[20px] py-[47px] mb-[81px] h-[392px] text-center w-[90vw] max-w-[364px] mx-auto ">
      <p className="min-h-[121px] mb-[8px]">{testimony}</p>
      <div className="stars">
        {/* <img src={stars} alt="Number of stars" /> */}
      </div>
      <img
        src={image}
        alt="author image"
        className="h-10 w-10 mx-auto my-[24px]"
      />
      <h3 className="testimonialCard__Author font-bold mb-[10px]">{author}</h3>
      <h5 className="">{role}</h5>
    </div>
  );
}

export default TestimonialCard;
