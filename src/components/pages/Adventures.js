import React, {useEffect, useRef} from 'react';
import HeroSection from '../HeroSection.js';
import AdventuresCards from '../AdventuresCards';
import Testimonials from '../Testimonials';

export default function Adventures() {

    const headingRef = useRef(null);

    useEffect(() => {
        headingRef.current.focus();
    }, [])

  return (
    <div ref={headingRef} tabIndex={-1}>
        <HeroSection 
        src='images/scuba-diver.jpg'
        alt=''
        title='How far will your adventure lead you?'/>
        <AdventuresCards />
        <Testimonials />
    </div>
  )};

