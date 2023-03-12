import React from 'react';
import s from './Contact.module.css';
import c from '../Common/Styles/Container.module.css';
import Title from "../Common/Components/Title/Title";


const Contact = () => {
    return (
        <div className={s.contactBlock}>
            <div className={`${c.container} ${s.contactContainer}`}>
                <div className={s.title}>
                    <span>SAY HELLO</span>
                    <Title title={'CONTACT'}/>
                </div>
               {/* <div className={s.formTitle}>
                    <h4>My Location</h4>
                    <SimpleMap/>
                </div>*/}
                <div className={s.formTitle}>
                    <h4>Get in Touch</h4>
                </div>
                <div className={s.inTouch}>
                <div className={s.inTouchBlock}>
                    <div className={s.icon}></div>
                    <span>14215 Ballantyne Lake Rd, Charlotte, NC</span>
                    <h5>Address</h5>
                </div>
                <div className={s.inTouchBlock}>
                    <div className={s.icon}></div>
                    <span>+704 975 0355</span>
                    <h5>Call Me</h5>
                </div>
                <div className={s.inTouchBlock}>
                    <div className={s.icon}></div>
                    <span>ek.sharova@icloud.com</span>
                    <h5>Email Me</h5>
                </div>
                </div>
                <div className={s.formTitle}>
                    <h4>Contact Form</h4>
                </div>
                <form>
                    <div className={s.inputs}>
                    <input type="text" id="name" name="user_name" placeholder="Your Name *"/>
                    <input type="email" id="mail" name="user_email" placeholder="Your Email *"/>
                    </div>
                    <textarea id="msg" name="user_message" placeholder="Your Message..."></textarea>
                    <button type="submit">SEND</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;


