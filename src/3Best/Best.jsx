import React, { useState } from 'react';
import './Best.css'
import pic1 from '../assets/tam.jpg'
import pic2 from '../assets/eng.jpg'
import pic3 from '../assets/hi.jpg'
import pic4 from '../assets/te.jpg'
import Card from 'react-bootstrap/Card';
const Best = () => {
const[cards,setcards]=useState([
    {
        id:1,
        imgd:pic1,
        name:"Tamil",
    },
    {
        id:2,
        imgd:pic2,
        name:"English",
    },
    {
        id:3,
        imgd:pic3,
        name:"Hindi",
    },
    {
        id:4,
        imgd:pic4,
        name:"Telugu",
    },

])

    return (
        <div className='bestfull'>
            <h2 className='heading'>Choose Language</h2>
            
<div className='cardone'>
{
cards.map((gg,i)=>(
<div className='imgdubba' key={i}>
           <Card style={{ width: '15rem'}}>
      <Card.Img variant="top" src={gg.imgd} className='imgbo'/>
      <Card.Body className='cardbody'>
        <Card.Title className='cardname'>{gg.name}</Card.Title>
      </Card.Body>
    </Card>  
</div>
))}

</div>
        </div>
    );
}

export default Best;
