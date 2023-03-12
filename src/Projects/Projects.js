import React from 'react';
import s from './Projects.module.scss';
import c from '../Common/Styles/Container.module.css';
import Project from "./Project/Project";
import Title from "../Common/Components/Title/Title";
import todoImage from '../assets/image/project.png';
import socialImage from '../assets/image/socialnetwork.jpeg';

const Projects = () => {
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    return (
        <div className={s.projectsBlock}>
            <div className={`${c.container} ${s.projectsContainer}`}>
                <div className={s.title}>
                    <span>PORTFOLIO</span>
                    <Title title={'MY PROJECTS'}/>
                </div>
                <div className={s.projectItems}>
                    <Project title={'To-Do list'}
                             description={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero. '}
                             style={todolist}
                    />
                    <Project title={'SWay social network'}
                             style={social}
                             description={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;