import React from 'react';
import CSSProjects from './Projects/CSSProjects';
import FrontEnd from './Projects/FrontEnd';
import FullStackProjects from './Projects/FullStackProjects';
import JSProyects from './Projects/JSProjects';

const Projects = (props) => {
    const { max } = props;
    return (
        <div className="projects flex flex-col items-center my-5">
            <JSProyects max={max} />
            <FrontEnd max={max} />
            <CSSProjects max={max} />
            <FullStackProjects max={max} />
        </div>
    );
};

export default Projects;
