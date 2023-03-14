import React from 'react';
import s from './Skills.module.scss';
import c from '../Common/Styles/Container.module.css';
import Skill from "./Skill/Skill";
import Title from "../Common/Components/Title/Title";
import TitleDescription from "../Common/Components/Title/Description/TitleDescription";


const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${c.container} ${s.skillsContainer}`}>
                <div className={s.title}>
                    <TitleDescription titleDescription={'What i know'}/>
                    <Title title={'MY SKILLS'}/>
                </div>
                <div className={s.skillsItems}>
                    <Skill title={'JS'}
                           description={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero. '}/>
                    <Skill title={'CSS'}
                           description={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.'}/>
                    <Skill title={'React'}
                           description={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.'}/>
                    <Skill title={'Redux'}
                           description={'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;