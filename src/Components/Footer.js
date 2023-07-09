import React from 'react';
import Logo from '../Images/Logo White.svg';
import FooterList from './FooterList';
import '../Stylesheet/Footer.css';

class Footer extends React.Component {
    render() {
        return (
          <footer>
            <div className='footer-side--one'>
              <img
                className='footer-logo' 
                src={Logo}
                alt='Logo Arclight'/>
              <p>
                Keep track of all your affiliate marketing campaigns
                 in once place, and analyze how well they are doing. 
                 Best part? It doesn’t cost an arm and a leg.
              </p>
            </div>
            <div className='footer-side--two'>
              <FooterList
                title='Company'
                item1='About'
                item2='Careers'
                item3='Contact Us' />

              <FooterList
                title='Services'
                item1='API'
                item2='Customization'
                item3='Marketplace' />

              <FooterList
                title='Resources'
                item1='Blog'
                item2='Case Studies'
                item3='Press' />

              <FooterList
                title='Privacy'
                item1='Terms & Conditions'
                item2='Privacy Policy'
                item3='user Agreement' />
            </div>
          </footer>
        )
    }
}

export default Footer;