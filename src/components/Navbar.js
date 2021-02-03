import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
      if(window.innerWidth <=960) {
          setButton(false);
      } else {
          setButton(true);
      }
  };
//keeps the sign up button from returning when you refresh page
  useEffect(() => {
      showButton()
  }, []);

  window.addEventListener('resize', showButton);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

    return (
        <>
          <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        WANDERLUST 
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/adventures' className='nav-links' onClick={closeMobileMenu}>
                                Adventures
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button className='nav-links-mobile'  >Sign Up</Button>}
                </div>
          </nav>
        </>
    )
}

export default Navbar
