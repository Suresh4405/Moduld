import React from 'react';
import './Adtwo.css'
import vv from '../assets/ad/y.mp4'
const Adtwo = () => {
    return (
        <div className='adful'>
            <div className='adhalf'>
                
<div className='adname'>
<h2 className='nameone'>Watch Your Favorite Movie Anywhere Anytime!</h2>
<p className='nametwo'>"Book your joy, reserve your seat, with BookMyShow, your entertainment heartbeat."</p>
</div>

<div className='advideo'>
<video src={vv} autoPlay muted loop className='v'></video>
</div>

</div>
</div>
    );
}

export default Adtwo;
