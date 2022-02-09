import React from 'react';
import './Card.css'
function Card({
    image,
    title,
    about,
    linkText,
    link
}) {
    return <div className='card relative mt-[235px] px-5'>

        <div className="card__Image relative w-[274px] max-w-max mx-auto ">
            <div className="card__ImageBackground absolute -top-6 -left-6 -z-10"></div>

            <img src={image}
                alt=""
                className='mb-[27px]'/>

        </div>
        <div className="card__Content ">
            <h2 className='absolute w-[100vw]  -top-[113px] left-0 text-lg text-center font-medium  '>
                {title}</h2>
            <p className='text-center text-[14px] leading-[25px] min-h-[140px] max-w-[353px] mb-[21px] mx-auto'>
                {about}</p>
            <a href={link}
                className='button'>
                {linkText}</a>
        </div>
    </div>;
}

export default Card;
