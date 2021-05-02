import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <main className="main-sec">
           <div className="container">
           <div className="row">
                <div className="col-md-7">
                    <h2>Hi, my name is <span style={{color: '#E2786C'}}>Tania</span> </h2>
                    <h2>I'm a <span style={{color: '#E2786C'}}>Full Stack Web Developer</span></h2>
                    <p className="title">A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                    <div>
                        <button className="btn1">About me</button>
                        <button className="button">Get in touch</button>
                    </div>
                </div>
               
                <div className="col-md-5">
                    
                </div>
            </div>
           </div>
        </main>
    );
};

export default Banner;