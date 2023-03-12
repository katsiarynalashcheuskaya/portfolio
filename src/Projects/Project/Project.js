import React from 'react';
import s from './Project.module.css';

const Project = (props) => {
    return (
        <div className={s.project}>
                <div className={s.pic} style={props.style}>
                    {/*<div className={s.details}>DETAILS</div>*/}
                </div>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
        </div>
    );
}

export default Project;