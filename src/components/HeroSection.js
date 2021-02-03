import React from 'react';
import './HeroSection.css';


function HeroSection (props) {
    return(
        <div className='hero-container'
            style={{ backgroundImage:`url(${props.src})`}}>
            <h1>{props.title}</h1>
        </div>
    )
};

export default HeroSection;