import React from 'react';

import  SubHeading from '../SubHeading/SubHeading'

import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title="NewsLetter"/>
      <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
      <p className='p__opensans'>Maxime mollitia, molestiae quas vel sint</p>
      <div className='app__newsletter-input flex__center'>
        <input type="email" placeholder="enter your email"/>
        <button className='custom__button'>Subscribe</button>
      </div>
    </div>
    
  </div>
);

export default Newsletter;
