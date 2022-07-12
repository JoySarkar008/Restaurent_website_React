import React from 'react';

import {images} from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={ images.chef} alt="chef"/>
    </div>

    <div className='app__wrapper_info'>
        <SubHeading title= "Chef's World"/>
        <h1 className='headtext__cormorant'>What we believe it</h1>
        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
              <img src={ images.quote} alt="quote" />
              <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur amet consectetur adipisicing elit.</p>
          </div>
          <p className='p__opensans'>
          Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio.
          </p>
        </div>

        <div className='app__chef-sign'>
            <p className='p__opensans'>Joy Sarkar</p>
            <p className='p__opensans'>Chef & Founder</p>
            <img src={images.sign} alt="sign"/>
        </div>
    </div>
  </div>
);

export default Chef;
