import React from 'react';
import s from './About.module.css';
import c from '../Common/Styles/Container.module.css';


const About = () => {
    return (
        <div className={s.aboutBlock}>
            <div className={`${c.container} ${s.aboutContainer}`}>
                <div className={s.aboutWrapper}>
                <div className={s.aboutDesc}>
                    <h2 className={s.title}>About Me</h2>
                <p className={s.text}>
                    Lorem ipsum dolor sit amet elit suscipit orci.
                    Donec molestie velit id libero.Lorem ipsum dolor sit amet elit suscipit orci.
                    Donec molestie velit id libero. Lorem ipsum dolor sit amet elit suscipit orci.
                </p>
                <div className={s.aboutMeIcons}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
                </div>
                <div>
                <div className={s.photo}>
                    <img src={'https://sun9-east.userapi.com/sun9-74/s/v1/ig2/KvJGqEB-VGq7Sn6JYkJRkTlwYihED5GfSYmjQ00GTDA6ulyPxkZ7EfP5LA8Y3Cxvr-CZlrwC8Uzs4AfGvCypKXdv.jpg?size=810x1080&quality=95&type=album")'} alt={'asfasfasf'}/>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default About;