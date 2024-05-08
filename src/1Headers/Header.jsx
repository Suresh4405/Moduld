import React from 'react';
import { useState } from 'react';
import { GiTheater } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import  './Header.css'; 

const Header = () => {
    const[nav,setnav]=useState('navy')
    const show=()=>{
        setnav('navy activenavbar')
    }

const unshow=()=>{
        setnav('navy')
    }
  return (
    <div >
    <div className="cont">
        <div className="heady">
            <div className="logo">
                <a href='' className='logoname'>
                    <h1 className='hw1'>< GiTheater className='ican'/>Series</h1>
                </a>
            </div>

            <div className={nav}>
                <ul className='navlist'>
                    <li className='navitem'><a href='' className=' navlink'>Home</a></li>
                    <li className='navitem'><a href='' className=' navlink'>Movie</a></li>
                    <li className='navitem'><a href='' className=' navlink'>Screen</a></li>
                    <li className='navitem'><a href='' className=' navlink'>Payments</a></li>
                    <li className='navitem'><a href='' className=' navlink'>About</a></li>
                    <li className='navitem'><a href='' className=' navlink'>Contact</a></li>
                    <li className='navitem'><a href='' className=' navlink'>
                    <input className='lab'/><button className='btns'> Search</button> 
                        </a></li>
                    
                </ul>
                <div className='end' onClick={unshow}>
                    < AiFillCloseCircle className='ican'/>
                </div>
            </div>
            <div className='toggy' onClick={show}>
            <TbGridDots className='ican'/>
            </div>
        </div>
    </div>
</div>
);
}


export default Header;
