import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HomeHeroSection.css';

function HomeHeroSection() {
    return (
        <div className='home-hero-container'>
            <video autoPlay loop muted >
                <source src='videos/video-2.mp4' type="video/mp4" />
            </video>
            <h1>FUEL YOUR WANDERLUST</h1>
            <p>Not all those who wander are lost</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn-large'>
                    GET STARTED 
                </Button>
            </div>
        </div>
    )
}

export default HomeHeroSection;
