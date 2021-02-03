import React from 'react'
import '../../App.css';
import HomeHeroSection from '../HomeHeroSection.js';
import HomeCards from '../HomeCards';
import DestinationCards from '../DestinationCards';

export default function Home (){
    return (
        <div>
            <HomeHeroSection />
            <HomeCards />
            <DestinationCards />
        </div>
    );
};