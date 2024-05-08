import React from 'react';
import { GiTheater } from "react-icons/gi";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
        <div className='seccontains'>
         <div className='logos'>

             <div className="footlogo">
                 <a href="" className="logo ">
                    <h5 className='fleet'> <GiTheater className='ican'/>
                     Movie&Series</h5>
                 </a>
             </div>

             <div className="social flex">
         <ImFacebook className='icon'/> 
         <BsTwitter className='icon'/> 
         <AiFillInstagram className='icon'/> 
         </div>

         </div>


         <div className="footlink">
 <span className='linktitle'>
     Information
 </span>
 <li>
     <a href=''>Home</a>
 </li>
 <li>
     <a href=''>Movie</a>
 </li>
 <li>
     <a href=''>Screen</a>
 </li>
 <li>
     <a href=''>Payment</a>
 </li>
 </div>      

 <div className="footlink">
 <span className='linktitle'>
     Help Desk
 </span>
 <li>
     <a href=''>Destination</a>
 </li>
 <li>
     <a href=''>Support</a>
 </li>
 <li>
     <a href=''>Events</a>
 </li>
 <li>
     <a href=''>Privacy</a>
 </li>
 </div>
 

 <div className="footlink">
 <span className='linktitle'>
     Contact Us
 </span>
 <span className='phone'>+91 63793 41607</span>
 <span className='email'>m.suresh4405@gmail.com</span>

 </div>      

     

        </div>
     </div>
    );
}

export default Footer;
