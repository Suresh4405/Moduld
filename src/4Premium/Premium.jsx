import React, { useState } from 'react';
import post1 from '../assets/premium/1.webp'
import post2 from '../assets/premium/2.jpg'
import post3 from '../assets/premium/3.jpg'
import post4 from '../assets/premium/4.webp'
import post5 from '../assets/premium/5.jpg'
import post6 from '../assets/premium/6.webp'
import post7 from '../assets/premium/7.jpg'
import post8 from '../assets/premium/8.png'
import post9 from '../assets/premium/9.webp'
import post10 from '../assets/premium/10.webp'
import './Premium.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaGooglePlay } from "react-icons/fa";
const Premium = () => {
const [slide,setslide]=useState([
    {
     id:1,
     img:post1,
  name:"The Godfather",
    },
    {
        id:2,
        img:post2,
        name:"Avatar",
       },
       {
        id:3,
        img:post3,
        name:"Top Gun",
       },
       {
        id:4,
        img:post4,
        name:"The Dark knight",
       },
       {
        id:5,
        img:post5,
        name:"THOR",
       },
       {
        id:6,
        img:post6,
        name:"Black Panther",
       },
       {
        id:7,
        img:post7,
        name:"Final Destination",
       },
       {
        id:8,
        img:post8,
        name:"The Fast X",
       },
       {
        id:9,
        img:post9,
        name:"Lord of War",
       },
       {
        id:10,
        img:post10,
        name:"The Last of us",
       },
])

const settings = {
     dots: false,
infinite: true,
speed: 500,
slidesToShow: 5,
slidesToScroll: 3,
initialSlide: 0,
responsive: [
    {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
  {
    breakpoint: 950,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 2,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 720,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
};


    return (
      <div className='fullbo'>
        <div className='prebody'>
            <div className='headings'>
              <div className='butty'>
               <FaGooglePlay className='ico'/> 
<div className='firstu'>
<h2 className='firstone'>Premium</h2>
<p className='firsttwo'>Watch your favorite movie</p>
</div>
</div>


<div className='secondu'>
<h2 className='secondone'>Powered by <span className='re'>NETFLIX</span> </h2>
</div>
</div>

<div className='high'>
<Slider {...settings} className='jas'>

{
slide.map((vv,i)=>(
<div className='sliimg' key={i}>
    <img src={vv.img} className='imagee'/>
    <p className='tinam'>{vv.name}</p>
</div>
))
}

</Slider>
</div>
        </div>
        </div>
    );
}

export default Premium;
