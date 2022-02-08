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

    return <div className='hero'>
        <div className="hero__Left">
            <h4> {optionalText}</h4>
            <h1> {title}</h1>
            <p> {about}</p>

            <div className="hero__Links">
                <a href={signUp}>
                    Get Started
                </a>
                <a href={signIn}>
                    Log in</a>

            </div>
        </div>
        <div className="hero__Right">
            <img src={image}
                alt="hero image"/>
        </div>
    </div>;
}

export default Hero;
