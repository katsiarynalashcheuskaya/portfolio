import React from 'react';
import s from './TitleDescription.module.scss';

const TitleDescription = (props) => {
    return (
        <div className={s.title}>
            <span>{props.titleDescription}</span>
        </div>
    );
}

export default TitleDescription;