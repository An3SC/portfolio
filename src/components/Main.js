import React from 'react';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Intro from './Intro';

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
