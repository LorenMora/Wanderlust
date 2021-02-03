import React from 'react';
import HeroSection from '../HeroSection.js';
import AdventuresCards from '../AdventuresCards';
import Testimonials from '../Testimonials';

export default function Adventures() {
  return (
    <div>
        <HeroSection 
        src='images/scuba-diver.jpg'
        alt=''
        title='How far will your adventure lead you?'/>
        <AdventuresCards />
        <Testimonials />
    </div>
  )};

