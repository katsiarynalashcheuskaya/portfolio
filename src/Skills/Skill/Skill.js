import React from 'react';
import s from './Skill.module.scss';


const Skill = (props) => {
    return (
        <div className={s.skill}>
            <div id="w1">
            <div className={s.blockFront}>
                <div className={s.icon}></div>
                <h3 className={s.titleFront}>{props.title}</h3>
            </div>
            </div>
            <div id="w2">
            <div className={s.blockBack} >
                <h3 className={s.titleBack}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
            </div>

        </div>
    );
}

export default Skill;