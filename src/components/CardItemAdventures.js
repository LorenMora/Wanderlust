import React from 'react';
import { Link } from 'react-router-dom';


export default function CardItemAdventures(props) {
    return (
        <>
            <li className='cards__item'>
                <div className='cards__item__link' >
                    <figure className='cards__item__pic-wrap_two'>
                        <img
                            className='cards__item__img'
                            alt={props.alt}
                            src={props.src}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <header>
                            <h2>{props.title}</h2>
                        </header>
                        <h7 className='cards__item__p'>{props.text}</h7>
                        <Link to='/sign-up' className='button_container'><button className='button'>Register Now!</button></Link>
                    </div>
                    
                </div>
            </li>
        </>
    )
};
