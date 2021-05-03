import React from 'react';
import pic from '../../images/tania.jpg';
import './About.css'

const About = () => {
    return (
        <section className='about-container'>
            <div className="container">
                <div className='row about-sec'>
                    <div className='col-md-7 about-text'>
                        <h1>About <span style={{color: '#F07B61'}}>Tania</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ut, velit a pariatur possimus aspernatur labore doloribus ratione. Explicabo dolor perspiciatis maxime excepturi animi debitis quod harum possimus assumenda ea? <br/><br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga voluptates, nostrum modi omnis vero aut adipisci perspiciatis </p>
                    </div>
                    <div className='col-md-5 pic-container'>
                        <img src={pic} alt="pic" className='pic'/>
                    </div>
                </div>  
                <div className='skill'>
                    <h3>My <span style={{color: '#F07B61'}}>Skills</span></h3>
                    <ul>
                        <li>javaScript</li>
                        <li>react</li>
                        <li>nodeJs</li>
                        <li>MongoDB</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>bootstrap</li>
                        <li>Material UI</li>
                        
                     </ul>
                </div>  
            </div>     
        </section>
    );
};

export default About;