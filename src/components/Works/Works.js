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
            'pic': weddingPic,
            'link': "https://wedding011.firebaseapp.com/",
            'gitLink': "https://github.com/tania-developer/wedding-planner-client",
            'description': "A complete Application for wedding planner, user can booking service and add a dynamic review with payment gateway system. Admin can manage service"

        },
        {
            'id': '2',
            'name': 'Gems Galore',
            'pic': gems ,
            'link': "https://gems-galore.web.app/" ,
            'gitLink': "https://github.com/tania-developer/gems-galore-client",
            'description': 'On the home page, product lists are loaded from the backend API. Private route use for authentication. If the user does not authenticate it will be redirected to the home page. After login user can order.'
              },
        {
            'id': '3',
            'name': 'Play Sports',
            'pic': play,
            'link': "https://hungry-goodall-d2d89f.netlify.app/",
            'gitLink': "https://github.com/tania-developer/play-sports",
            'description': 'Responsive one-page sports website. Home page league information dynamically from thesportsdb API. After clicking the details button it will show the detailed information of that league and logo.'
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