import React from 'react';
import './Hero.css'
function Hero({
    title,
    about,
    signUp,
    signIn,
    image,
    optionalText
}) {

    return <div className='hero flex px-[37px] py-[93px] md:p-6'>
        <div className="hero__Left ">
            <h4 className='text-sm mb-4'>
                {optionalText}</h4>
            <h1 className='font-bold text-2xl leading-10 mb-6 max-w-xs'>
                {title}</h1>
            <p className='text-sm leading-6 max-w-sm mb-4 h-28'>
                {about}</p>

            <div className="hero__Links flex  justify-between max-w-xs mt-2">
                <a href={signUp}
                    className='hero__Link '>
                    Get Started
                </a>
                <a href={signIn}
                    className='hero__Link'>
                    Log in</a>

            </div>
        </div>
        <div className="hero__Right hidden md:block">
            <img src={image}
                alt="hero image"/>
        </div>
    </div>;
}

export default Hero;
