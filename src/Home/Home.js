import React from 'react';
import s from './Home.module.css';
import c from '../Common/Styles/Container.module.css';
import photo from './fun-photo-2.jpg'


const Home = () => {
    return (
        <div className={s.homeBlock}>
            <div className={c.container}>
                <div>
                    <canvas className={s.canvasJs}></canvas>
                </div>

            <div className={s.nameBlock}>
                <span>HELLO, I AM</span>
                <h1>Katsiaryna Lashcheuskaya</h1>
            </div>
           {/* <div className={s.photo}></div>*/}
        </div>
        </div>
    );
}

export default Home;