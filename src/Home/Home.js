import React from 'react';
import s from './Home.module.css';
import c from '../Common/Styles/Container.module.css';


const Home = () => {
    return (
        <div className={s.homeBlock}>
            <div className={c.container}>
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