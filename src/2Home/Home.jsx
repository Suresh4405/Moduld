import React from 'react';
import  './Home.css'
import Badge from 'react-bootstrap/Badge';
import img1 from '../assets/mon.jpg'
import img2 from '../assets/st.jpg'
import img3 from '../assets/h.jpg'
import { IoPlay } from "react-icons/io5";
import { IoMdBookmark } from "react-icons/io";
import Carousel from 'react-bootstrap/Carousel';
const Home = () => {

    return (
        <div  className='fully'>

              <Carousel className='dubba'>
              <Carousel.Item className='imgebox'>
      <img src={img2} className='imn'/>
        <Carousel.Caption className='infor'>
          <h2>Stranger Things</h2>
          <p>Gener: Crime Heist Action Thriller Mystry Character Drama</p>
          <p>
          IMBD Rating <Badge bg='warning'>7.9</Badge>
      </p>
      <div className='butbox'>
      <button className='bts'><IoPlay className='ic'/>Trailer</button>
      <button className='bts'><IoMdBookmark className='ic'/>Book</button>
      </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='imgebox'>
      <img src={img3} className='imn'/>
        <Carousel.Caption className='infor'>
          <h2>The Boys</h2>
          <p>
          Gener: Crime Heist Action Thriller Mystry Character Drama
          </p>
          <p>
          IMBD Rating <Badge  bg='warning'>8.2</Badge>
      </p>
      <div className='butbox'>
      <button className='bts'><IoPlay className='ic'/>Trailer</button>
      <button className='bts'><IoMdBookmark className='ic'/>Book</button>
      </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='imgebox'>
      <img src={img1} className='imn'/>
        <Carousel.Caption className='infor'>

          <h2>MoneyHiest</h2>
          <p>Gener: Crime Heist Action Thriller Mystry Character Drama</p>
          <p>
        IMBD Rating <Badge  bg='warning'>8.1</Badge>
      </p>
      
      <div className='butbox'>
      <button className='bts'><IoPlay className='ic'/>Trailer</button>
      <button className='bts'><IoMdBookmark className='ic'/>Book</button>
      </div>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
        </div>
    );
}

export default Home;
