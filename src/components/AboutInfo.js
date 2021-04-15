import React from 'react';
import { GiFarmer, GiEcology, GiForest, GiRecycle, GiBodyBalance } from 'react-icons/gi';
import { MdAllInclusive, MdLocalFlorist, MdChildFriendly } from 'react-icons/md';

function AboutInfo() {

    return (
        <div className='info-container'>
            <div className='our-story-wrapper'>
                <h1>Our Story</h1>
                <div className='bio-wrapper'>
                    <h2 className='bio-heading'>"To travel is to live" - Founder of WANDERLUST</h2>
                    <p className='bio'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur. Proin sed libero enim sed faucibus turpis in eu. Feugiat scelerisque varius morbi enim nunc faucibus. A erat nam at lectus urna duis convallis convallis tellus. Interdum velit laoreet id donec ultrices. Vestibulum sed arcu non odio. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Suspendisse potenti nullam ac tortor vitae. Pellentesque id nibh tortor id aliquet lectus proin. Sed faucibus turpis in eu. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Quis vel eros donec ac odio tempor orci.</p>
                    <img className='bio-img' alt='Two people looking at a map' src='images/map.jpg'/>
                </div>
            </div>
            <div className='services-wrapper'>
                <h1>Services</h1>
                <div className='icon-wrapper'>
                    <div className='service-card'>
                        <MdChildFriendly className='icon' /> 
                        <p>Full family services</p>
                    </div>
                    <div className='service-card'>
                        <MdAllInclusive className='icon' /> 
                        <p>Local and sustainable</p>
                    </div> <div className='service-card'>
                        <GiEcology className='icon' /> 
                        <p>Ecological Protection</p>
                    </div>
                    <div className='service-card'>
                        <GiFarmer className='icon' /> 
                        <p>Support local agriculture</p>
                    </div>
                    <div className='service-card'>
                        <GiForest className='icon' /> 
                        <p>Protect natural habitats</p>
                    </div> <div className='service-card'>
                        <MdLocalFlorist className='icon' /> 
                        <p>Nature Preservation</p>
                    </div>
                    <div className='service-card'>
                        <GiBodyBalance className='icon' /> 
                        <p>Holistic Packages</p>
                    </div>
                    <div className='service-card'>
                        <GiRecycle className='icon' /> 
                        <p>Responsible consumption</p>
                    </div> 
                    <div className='service-card'>
                        <GiFarmer className='icon' /> 
                        <p>Support local agriculture</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutInfo;
