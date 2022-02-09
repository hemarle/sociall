import React from 'react';
import './Card.css'
function Card({
    image,
    title,
    about,
    linkText,
    link
}) {
    return <div className='card'>

        <div className="card__Image">
            <div className="card__ImageBackground"></div>
            <img src={image}
                alt=""/>
        </div>
        <div className="card__Content">
            <h2> {title}</h2>
            <p> {about}</p>
            <a href={link}>
                {linkText}</a>
        </div>
    </div>;
}

export default Card;
