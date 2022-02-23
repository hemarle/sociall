import React from "react";
import TestimonialCard from "./TestimonialCard";

function Testimonial({ title, data }) {
  return (
    <div className="testimonial">
      <h2 className="text-center font-bold mb-[25px]">{title}</h2>

      <div className="testimonial__Cards lg:flex">
        {data.map(({ image, author, testimony, stars, role }) => (
          <TestimonialCard
            image={image}
            author={author}
            testimony={testimony}
            stars={stars}
            role={role}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
