import React from 'react';
import './About.css';
import con from '../assets/abo/contry.jpg';
import the from '../assets/abo/thet.jpg';
import com from '../assets/abo/unity.jpg';

const About = () => {
    return (
        <div>
             <div className='abcontain'>
                <h2 className='abname'>
                    About Us
                </h2>

                <div className='mainab'>

                    <div className='singleab'>
                        <img src={con} alt='web image' className='imge'/>

                        <h3>100+ Countries </h3>

                        <p>Research shows that a chance to break away from the normal rythms of 
                            daily life reduces stress and improves health and well-being</p>
                    </div>


                    <div className='singleab'>
                        <img src={the} alt='web image' className='imge'/>

                        <h3>1000+ Theaters </h3>

                        <p>Research shows that a chance to break away from the normal rythms of 
                            daily life reduces stress and improves health and well-being</p>
                    </div>


                    <div className='singleab'>
                        <img src={com} alt='web image' className='imge'/>

                        <h3>2000+ Peoples </h3>

                        <p>Research shows that a chance to break away from the normal rythms of 
                            daily life reduces stress and improves health and well-being</p>
                    </div>

                </div>
        </div>
        </div>
    );
}

export default About;
