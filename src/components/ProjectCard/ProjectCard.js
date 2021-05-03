import React from 'react';
import './ProjectCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ProjectCard = ({pr}) => {
    console.log(pr);
    return (
        <section className='body'>
            <div className="card">
                <div className="image">
                    <img src={pr.pic} alt="website imagae"/>
                </div>
                <div className="feature">
                     <ul>
                        <li>java</li>
                        <li>react</li>
                        <li>nodeJs</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>bootstrap</li>
                        
                     </ul>
                </div>
                <div className="details">
                    <div className="center">
                        <h1>{pr.name}</h1>
                            <p>A complete Application for wedding planner, user can booking service and add a dynamic review with payment gateway system. Admin can manage service</p>
                            <ul>
                                <li><a href="https://wedding011.firebaseapp.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} /></a></li>
                                <li><a href="https://wedding011.firebaseapp.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                                
                            </ul>
                     </div>
                </div>
             </div>
        </section>
    );
};

export default ProjectCard;