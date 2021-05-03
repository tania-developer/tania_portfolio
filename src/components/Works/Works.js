import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import weddingPic from '../../images/wedding.png'
import gems from '../../images/games.png'
import play from '../../images/play.png'

const Works = () => {
    const project = [
        { 
            'id': '1',
            'name': 'Wedding',
            'pic': weddingPic

        },
        {
            'id': '2',
            'name': 'Gems Galore',
            'pic': gems        },
        {
            'id': '3',
            'name': 'Sports Play',
            'pic': play
        }

    ]
    
    return (
        <div className='work-sec'style={{backgroundColor: '#16203A', color: '#fff', padding: '100px 20px'}}>
           <div className="container">
           
           <h1>Full Stack Web Developer Portfolio</h1>
           <p className='pb-5' style={{fontSize: '20px', fontWeight: '300'}}>Just Some of the Project I work on</p>
           <div className="project-container">
           {
               project.map(pr=><ProjectCard pr={pr} key={pr.id}></ProjectCard>)
           }
           </div>
           </div>
        </div>
    );
};

export default Works;