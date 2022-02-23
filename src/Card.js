import React from "react";
import "./Card.css";
function Card({ image, title, about, linkText, link }) {
  return (
    <div className="card relative lg:flex mt-[235px] px-5 md:py-[77px] md:px-[102px] md:m-0 ">
      <div className="card__Image relative w-[274px] max-w-max mx-auto md:w-[426px] md:mx-0 lg:max-w-[inherit] lg:z-[-10px]">
        <div className="card__ImageBackground absolute -top-6 -left-6 z-10 md:z-[-12px]"></div>

        <img
          src={image}
          alt=""
          className=" relative z-10 mb-[27px] lg:min-h-[412px] md:min-w-[426px]"
        />
      </div>
      <div className="card__Content md:mx-4 lg:mx-6 lg:ml-[84px] ">
        <h2 className="absolute w-[100vw] md:w-max -top-[113px] md:top-0 left-0 text-lg text-center font-medium md:mx-auto md:text-left md:mx-0 md:mb-[8px]  md:relative md:text-[35px] md:min-h-[127px] md:max-w-[556px] md:leading-[57px]">
          {title}
        </h2>
        <p className="text-center text-[14px] leading-[25px] min-h-[140px] max-w-[353px] mb-[21px] mx-auto md:max-w-[544px] md:text-left md:m-0 md:max-w-[544px] md:text-[16px] md:leading-[26px] md:min-h-[164px] ">
          {about}
        </p>
        <a href={link} className="button md:m-0">
          {linkText}
        </a>
      </div>
    </div>
  );
}

export default Card;
