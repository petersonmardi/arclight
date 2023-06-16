import React from 'react';
import '../Stylesheet/Navbar.css'
import Button from './Button';
import Logo from '../Images/Logo.svg';
import List from './List';

function Navbar() {
    return (
        <nav className='header-navbar'>
            <div className='header-navbar--logo'>
                <img 
                  className='Logo'
                  src={Logo} 
                  alt='Logo'/>
            </div>
            <div className='header-navbar--links'>
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

            <Button 
            buttonClass='main-CTA'
            text='Get started' 
            itsFree={"- it's free"}/>

        </nav>
    )
}

export default Navbar;