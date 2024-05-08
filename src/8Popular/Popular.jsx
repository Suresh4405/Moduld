import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Popular.css'
import re from '../assets/popu/re.jpg'
import re1 from '../assets/popu/re1.webp'
import re2 from '../assets/popu/re2.webp'
import re3 from '../assets/popu/re3.webp'
import re4 from '../assets/popu/re4.webp'
import re5 from '../assets/popu/re5.webp'
import re6 from '../assets/popu/re6.webp'

import hp from '../assets/popu/hp.webp'
import hp1 from '../assets/popu/hp1.jpg'
import hp2 from '../assets/popu/hp2.jpg'
import hp3 from '../assets/popu/hp3.jpg'
import hp4 from '../assets/popu/hp4.jpg'
import hp5 from '../assets/popu/hp5.jpg'
import hp6 from '../assets/popu/hp6.jpg'

import lr from '../assets/popu/lr.jpg'
import l1 from '../assets/popu/l1.webp'
import l2 from '../assets/popu/l2.webp'
import l3 from '../assets/popu/l3.webp'
import l4 from '../assets/popu/l4.webp'
import l5 from '../assets/popu/l5.webp'


import pc from '../assets/popu/pc.jpg'
import pc1 from '../assets/popu/pc1.webp'
import pc2 from '../assets/popu/pc2.webp'
import pc3 from '../assets/popu/pc3.webp'
import pc4 from '../assets/popu/pc4.webp'
const Popular = () => {
    return (
        <div className='super'>
            <h2 className='poname'>Popular Collection</h2>
             <Accordion className='accbody'>
      <Accordion.Item eventKey='0' className='onebo'>
        <Accordion.Header className='he'><img src={hp} className='pos'/></Accordion.Header>
        <Accordion.Body className='bobby'>
        <img src={hp1} className='pos'/>
        <img src={hp2} className='pos'/>
        <img src={hp3} className='pos'/>
        <img src={hp4} className='pos'/>
        <img src={hp5} className='pos'/>
        <img src={hp6} className='pos'/>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className='onebo'>
        <Accordion.Header><img src={lr} className='pos'/></Accordion.Header>
        <Accordion.Body className='bobby'>
        <img src={l1} className='pos'/>
        <img src={l2} className='pos'/>
        <img src={l3} className='pos'/>
        <img src={l4} className='pos'/>
        <img src={l5} className='pos'/>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className='onebo'>
        <Accordion.Header><img src={re} className='pos'/></Accordion.Header>
        <Accordion.Body className='bobby'>
        <img src={re1} className='pos'/>
        <img src={re2} className='pos'/>
        <img src={re3} className='pos'/>
        <img src={re4} className='pos'/>
        <img src={re5} className='pos'/>
        <img src={re6} className='pos'/>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3" className='onebo'>
        <Accordion.Header><img src={pc} className='pos'/></Accordion.Header>
        <Accordion.Body className='bobby'>
        <img src={pc1} className='pos'/>
        <img src={pc2} className='pos'/>
        <img src={pc3} className='pos'/>
        <img src={pc4} className='pos'/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
}

export default Popular;
