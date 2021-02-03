import React from 'react';
import './Testimonials.css';

export default function Testimonials() {
    return (
        <div className='testimonials-container'>
            <h1 className='test-heading'>Testimonials</h1>
            <div className='testimonials-wrapper'>
                <div className='testimony-card'>
                    <img className='testimony-img' alt='head shot of Asian woman' src='images/woman.png' />
                    <div className='testimony-content'>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </div>
                </div>
                <div className='testimony-card'>
                    <img className='testimony-img' alt='head shot of Southeast Asian young man' src='images/man.png' />
                    <div className='testimony-content'>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </div>
                </div>
                <div className='testimony-card'>
                    <img className='testimony-img' alt='head shot of young Latino man' src='images/headshot.png' />
                    <div className='testimony-content'>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </div>
                </div>
            </div>

        </div>
    )
}