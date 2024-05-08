import React, { useState } from 'react';
import { IoPlay } from "react-icons/io5";
import { IoMdBookmark } from "react-icons/io";
import './Latest.css'
import im1 from "../assets/latest/m1.jpg"
import { FaPlayCircle } from "react-icons/fa";
import im2 from "../assets/latest/m2.jpg"
import im3 from "../assets/latest/m3.png"
import im4 from "../assets/latest/m4.jpg"
import im5 from "../assets/latest/m5.jpg"
import im6 from "../assets/latest/m6.jpg"
import im7 from "../assets/latest/m7.jpg"
import im8 from "../assets/latest/m8.jpg"
import im9 from "../assets/latest/m9.jpg"
import im10 from "../assets/latest/m10.jpg"


const Latest = () => {
const[ime,setime]=useState([
    {
        i:im1,
    },
    {
        i:im2,
    },
    {
        i:im3,
    },
    {
        i:im4,
    },
    {
        i:im5,
    },
    {
        i:im6,
    },
    {
        i:im7,
    },
    {
        i:im8,
    },
    {
        i:im9,
    },
    {
        i:im10,
    },
])


    return (
        <div>
            <div className='latestbody'>
                <div className='latesthead'>
<h2 className='latestname'>Latest Movie</h2>
                </div>

<div className='latestcontent'>
<div className='divimg'>
{
ime.map((dd,i)=>(
    <div className='singleimage'>
<div className='lateimagebox'>
    <img src={dd.i} className='lateimage'/>
 <div className='imginfo'> 
 < FaPlayCircle className='imico'/>
 <p className='imp'>Watch</p>  
</div>
</div>

<div className='latefoot'>
<div className='b1'>
<a href=''><button className='but'><IoPlay className='io'/>Trailer</button></a>
</div>
<div className='b2'>
<a href=''><button className='but'><IoMdBookmark className='io'/>Book</button></a>
</div>
</div>
</div>
))
}
</div>
                </div>

            </div>
        </div>
    );
}

export default Latest;
