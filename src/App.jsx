import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import About from "./About/About";


const App = () => {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <About/>
            <Skills />
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
