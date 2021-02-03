import React from 'react';
import './Cards.css';
import CardItemDestinations from './CardItemDestinations.js';

function DestinationCards() {
    return (
        <div className="cards">
            <h1>Destinations</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItemDestinations
                        src='images/new-zealand.jpg'
                        text='New Zealand'
                        path='/adventures'
                        />
                        <CardItemDestinations
                        src='images/africa.jpg'
                        text='Africa'
                        path='/adventures'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItemDestinations
                        src='images/southeast-asia.jpg'
                        text='Southeast Asia'
                        path='/adventures'
                        />
                        <CardItemDestinations
                        src='images/carribean.jpg'
                        text='Carribean'
                        path='/adventures'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItemDestinations
                        src='images/french-polynesia.jpg'
                        text='Pacific Islands'
                        path='/adventures'
                        />
                        <CardItemDestinations
                        src='images/europe.jpg'
                        text='Europe'
                        path='/adventures'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default DestinationCards;