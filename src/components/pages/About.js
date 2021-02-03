import React from 'react';
import './About.css';
import HeroSection from '../HeroSection.js';
import AboutInfo from '../AboutInfo.js';

export default function About() {
  return (
    <div>
        <HeroSection 
        src='images/hiker.jpg'
        alt=''
        title='We turn dreams into reality'/>
        <AboutInfo />
    </div>
  )};