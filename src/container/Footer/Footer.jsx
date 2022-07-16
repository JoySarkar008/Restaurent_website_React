import React from 'react';

import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiInstagram, FiTwitter} from 'react-icons/fi'
import './Footer.css';
import { images } from '../../constants';
const Footer = () => (
 
  <div className='app__footer app__wrapper section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className='p__opensans'>123 Main Street, New York</p>
          <p className='p__opensans'>(212)456-7890</p>
          <p className='p__opensans'>212-456-7890</p>

      </div>
      <div className='app__footer-links_logo'>
          <img src={images.gericht} alt="footer logo"/>
          <p className='p__opensans'>"Get busy living or get busy dying." </p>
          <img src= {images.spoon} alt="spoon" style={{ marginTop: 15}}/>
          <div className='app__footer-links_icons'>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
      </div>

      <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Working Hour</h1>
          <p className='p__opensans'>Mon -Friday</p>
          <p className='p__opensans'>9 a.m - 5 p.m</p>
          <p className='p__opensans'>Sat - Sun</p>
          <p className='p__opensans'>9 a.m - 2 p.m</p>
      </div>
    </div>
    <div className='footer__copyright'>
        <p className='p__opensans'>Copyright © 2022 Freelancer Technology</p>
    </div>
   
  </div>
  
);

export default Footer;
