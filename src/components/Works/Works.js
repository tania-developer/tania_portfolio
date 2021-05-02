import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

const Works = () => {
    
    return (
        <div className='work-sec py-4'style={{backgroundColor: '#16203A', color: '#fff', height: '100vh'}}>
           <div className="container">
           
           <h1>Full Stack Web Developer Portfolio</h1>
           <p className='pb-5' style={{fontSize: '20px', fontWeight: '300'}}>Just Some of the Project I work on</p>
           <ProjectCard></ProjectCard>
          <div className='mt-5'>
          
          </div>
           </div>
        </div>
    );
};

export default Works;