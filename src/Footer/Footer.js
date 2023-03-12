import React from 'react';
import s from './Footer.module.css';
import c from '../Common/Styles/Container.module.css';


const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${c.container} ${s.footerContainer}`}>
                <h4 className={s.title}>Katsiaryna Lashcheuskaya</h4>
                <div className={s.footerIcons}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
                <span>© 2023 All rights reserved.</span>
            </div>
        </div>
    );
}

export default Footer;