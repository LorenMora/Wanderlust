import React from 'react';
import CardItemAdventures from './CardItemAdventures';
import './Cards.css';


export default function AdventuresCards() {
    return (
        <div className='cards'>
            <h1 tabIndex={0}>Adventure Packages</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItemAdventures 
                        src='images/aurora.jpg'
                        alt=''
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur. Proin sed libero enim sed faucibus turpis in eu. Feugiat scelerisque varius morbi enim nunc faucibus. A erat nam at lectus urna duis convallis convallis tellus. Interdum velit laoreet id donec ultrices. Vestibulum sed arcu non odio. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Suspendisse potenti nullam ac tortor vitae. Pellentesque id nibh tortor id aliquet lectus proin. Sed faucibus turpis in eu. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Quis vel eros donec ac odio tempor orci'
                        title='Iceland'
                        />  
                        <CardItemAdventures 
                        src='images/hot-air-balloons.jpg'
                        alt=''
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur. Proin sed libero enim sed faucibus turpis in eu. Feugiat scelerisque varius morbi enim nunc faucibus. A erat nam at lectus urna duis convallis convallis tellus. Interdum velit laoreet id donec ultrices. Vestibulum sed arcu non odio. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Suspendisse potenti nullam ac tortor vitae. Pellentesque id nibh tortor id aliquet lectus proin. Sed faucibus turpis in eu. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Quis vel eros donec ac odio tempor orci'
                        title='New Mexico'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItemAdventures 
                        src='images/snow-biking2.jpg'
                        alt=''
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur. Proin sed libero enim sed faucibus turpis in eu. Feugiat scelerisque varius morbi enim nunc faucibus. A erat nam at lectus urna duis convallis convallis tellus. Interdum velit laoreet id donec ultrices. Vestibulum sed arcu non odio. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Suspendisse potenti nullam ac tortor vitae. Pellentesque id nibh tortor id aliquet lectus proin. Sed faucibus turpis in eu. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Quis vel eros donec ac odio tempor orci'
                        title='Norway'
                        />
                        <CardItemAdventures 
                        src='images/rockclimbing.jpg'
                        alt=''
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur. Proin sed libero enim sed faucibus turpis in eu. Feugiat scelerisque varius morbi enim nunc faucibus. A erat nam at lectus urna duis convallis convallis tellus. Interdum velit laoreet id donec ultrices. Vestibulum sed arcu non odio. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Suspendisse potenti nullam ac tortor vitae. Pellentesque id nibh tortor id aliquet lectus proin. Sed faucibus turpis in eu. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Quis vel eros donec ac odio tempor orci'
                        title='Austrailia'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItemAdventures 
                        src='images/thailand-temple2.jpg'
                        alt=''
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur. Proin sed libero enim sed faucibus turpis in eu. Feugiat scelerisque varius morbi enim nunc faucibus. A erat nam at lectus urna duis convallis convallis tellus. Interdum velit laoreet id donec ultrices. Vestibulum sed arcu non odio. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Suspendisse potenti nullam ac tortor vitae. Pellentesque id nibh tortor id aliquet lectus proin. Sed faucibus turpis in eu. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Quis vel eros donec ac odio tempor orci'
                        title='Thailand'
                        />  
                        <CardItemAdventures 
                        src='images/madagascar.jpg'
                        alt=''
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur. Proin sed libero enim sed faucibus turpis in eu. Feugiat scelerisque varius morbi enim nunc faucibus. A erat nam at lectus urna duis convallis convallis tellus. Interdum velit laoreet id donec ultrices. Vestibulum sed arcu non odio. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Suspendisse potenti nullam ac tortor vitae. Pellentesque id nibh tortor id aliquet lectus proin. Sed faucibus turpis in eu. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Quis vel eros donec ac odio tempor orci'
                        title='Madagascar'
                        />
                    </ul>
                </div>            
            </div>
        </div>
    )
}
