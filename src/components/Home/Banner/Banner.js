import React from 'react';
import './Banner.css';
import developer from '../../../images/developer.jpg';
import {Link} from 'react-router-dom'

const Banner = () => {
    return (
        <main className="main-sec">
           <div className="container">
           <div className="row">
                <div className="col-md-7">
                    <h2>Hi, my name is <span style={{color: '#E2786C'}}>Tania</span> </h2>
                    <h2>I'm a <span style={{color: '#E2786C'}}>Full Stack Web Developer</span></h2>
                    <p className="title">A self-motivated and enthusiastic web developer with a deep interest in JavaScript. I can create responsive designs for web applications by using React. And also have some knowledge of TypeScript, Next JS, Tailwind, etc.</p>
                    <div>
                        <Link to="/about"><button className="btn1">About me</button></Link>
                        <Link to="/contact"><button className="button">Get in touch</button></Link>
                    </div>
                </div>

                <div className="col-md-5 developer-pic">
                <img src= {developer} alt="developer"/> 
                </div>
            </div>
           </div>
        </main>
    );
};

export default Banner;