import React from 'react';
import About from './About';
import Contact from './Contact';
import Intro from './Intro/Intro';
import Projects from './Projects';

const Main = () => {
    return (
        <div className="">
            <Intro />
            <Projects max={3} />
            <About />
            <Contact />
        </div>
    );
};

export default Main;
