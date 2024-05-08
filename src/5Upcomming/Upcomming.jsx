import React, { useState } from 'react';
import "./Upcomming.css"
import one from '../assets/upmov/1.jpg'
import two from '../assets/upmov/2.jpg'
import three from '../assets/upmov/3.jpg'
import four from '../assets/upmov/4.jpg'
import five from '../assets/upmov/5.jpg'
import six from '../assets/upmov/6.jpg'
import seven from '../assets/upmov/7.jpg'
import eight from '../assets/upmov/8.jpg'
import nine from '../assets/upmov/9.jpg'
import ten from '../assets/upmov/10.jpg'
const Upcomming = () => {
const[sho,setsho]=useState([
    {
        m:one,
    },
    {
        m:two,
    },
    {
        m:three,
    },
    {
        m:four,
    },
    {
        m:five,
    },
    {
        m:six,
    },
    {
        m:seven,
    },
    {
        m:eight,
    },
    {
        m:nine,
    },
    {
        m:ten,
    },
])


    return (
        <div>
            <div className='upbox'>
<div className='upname'>
<h2 className='upna'>Upcomming Movie</h2>
</div>   
<div className='dum'>
    {
sho.map((hh,i)=>(
<div className='upmovbox' key={i}>
    <div className='upmov'>
<img src={hh.m} className='upimg'/>
</div>
</div>
))  }
</div>
            </div>
        </div>
    );
}

export default Upcomming;
