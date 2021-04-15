import React, {useEffect, useRef} from 'react';
import './About.css';
import HeroSection from '../HeroSection.js';
import AboutInfo from '../AboutInfo.js';

export default function About() {
    const headingRef = useRef(null);

    useEffect(() => {
        headingRef.current.focus();
    }, [])

  return (
    <div  ref={headingRef} tabIndex={-1}>
        <HeroSection 
        src='images/hiker.jpg'
        alt=''
        title='We turn dreams into reality'/>
        <AboutInfo />
    </div>
  )};