import React from 'react';
import s from './Skill.module.scss';


const Skill = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.blockBackground}>
                <div className={s.icon}></div>
                <h3 className={s.title}>{props.title}</h3>
            </div>
            {/*<div>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>*/}
        </div>
    );
}

export default Skill;