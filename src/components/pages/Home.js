import React from 'react'
import '../../App.css';
import HomeHeroSection from '../HomeHeroSection.js';
import HomeCards from '../HomeCards';
import DestinationCards from '../DestinationCards';

export default function Home (){



    return (
        <div>
            <a href='#maincontent' className='skip-link' tabIndex={5}>Skip to main content</a>
            <HomeHeroSection />
            <div id='maincontent'></div>
            <HomeCards />
            <DestinationCards />
        </div>
    );
};