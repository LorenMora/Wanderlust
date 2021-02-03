import React from 'react';
import './Cards.css';
import CardItem from './CardItem.js';

function HomeCards() {
  return (
    <div className='cards'>
      <h1>Adventure stories from behind the scenes!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/havana.jpg'
              text='Venture inside a private tour through Havana&apos;s most Historic District'
              label='Luxury'
              path='/adventures'
            />
            <CardItem
              src='images/rock-yoga.jpg'
              text='Top 5 yoga retreats of 2021'
              label='Spirit'
              path='/adventures'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/tent-night.jpg'
              text='Uncover the 10 best National Parks for stargazing'
              label='Wonder'
              path='/adventures'
            />
            <CardItem
              src='images/snow-trekking.jpg'
              text='Discover if you have what it takes to summit Mt. Everest'
              label='Adrenaline'
              path='/adventures'
            />
            <CardItem
              src='images/backpacker.jpg'
              text='Essential gear every backpacker must own'
              label='Adventure'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeCards;