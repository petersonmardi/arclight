import React from 'react';
import '../Stylesheet/Navbar.css'
import Button from './Button';
import Logo from '../Images/Logo.svg';
import List from './List';
import Hamburger from '../Images/Hamburger Menu.svg';

function Navbar() {
    return (
        <nav className='header-navbar'>
            <div className='header-navbar--logo'>
                <img 
                  className='Logo'
                  src={Logo} 
                  alt='Logo'/>
            </div>

            <div className='header-navbar--links hide-for-mobile'>
                <List 
                  listClass='navbar-link'
                  text='Pricing'/>
                
                <List 
                  listClass='navbar-link'
                  text='Features'/>
                
                <List 
                  listClass='navbar-link'
                  text='Docs'/>
            </div>

            <div className='navbar-CTA, hide-for-mobile'>
                <Button 
                  buttonClass='mainCTA'
                  text='Get started' 
                  itsFree={"- it's free"}/>
            </div>

            <div className='header-navbar--menu show-for-mobile'>
              <img 
                src={Hamburger}
                alt='Hamburger' />
            </div>
        </nav>
    )
}

export default Navbar;