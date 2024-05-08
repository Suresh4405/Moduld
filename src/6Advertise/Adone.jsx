import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Adone.css'
import imb1 from '../assets/ad/001.jpg'
import imb2 from '../assets/ad/003.jpg'
import imb3 from '../assets/ad/002.png'
const Adone = () => {
    return (
        <div className='addy'>
             <Carousel>
      <Carousel.Item interval={2000}>
         <img src={imb1} className='adimg'/> 
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src={imb2} className='adimg'/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img src={imb3} className='adimg'/>
      </Carousel.Item>
    </Carousel>
    </div>
    );
}

export default Adone;
