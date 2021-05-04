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
                        <p>I'm a Full Stack Web Developer with experience creating custom websites through javaScript, React, MongoDB, and nodeJS. I have the ability to develop, integrate and maintain websites with various back-end frameworks. I can create responsive designs for web applications by using React. And also have some knowledge of TypeScript, Next JS, Tailwind, etc.<br/><br/> My interests include traveling, reading books, and cooking. </p>
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