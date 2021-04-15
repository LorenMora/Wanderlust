import React, {useRef, useEffect} from 'react'
import '../../App.css';
import HomeHeroSection from '../HomeHeroSection.js';
import HomeCards from '../HomeCards';
import DestinationCards from '../DestinationCards';

export default function Home (){

    const headingRef = useRef(null);

    useEffect(() => {
        headingRef.current.focus();
    }, [])

    return (
        <div ref={headingRef} tabIndex={-1}>
            <HomeHeroSection />
            <HomeCards />
            <DestinationCards />
        </div>
    );
};