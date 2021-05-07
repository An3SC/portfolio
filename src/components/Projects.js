import React from 'react';
import CSSProjects from './Projects/CSSProjects';
import FullStackProjects from './Projects/FullStackProjects';
import JSProyects from './Projects/JSProjects';

const Projects = (props) => {
    const { max } = props;
    return (
        <div className="flex flex-col items-center my-5">
            {/* <h1>Projects</h1> */}
            <JSProyects max={max} />
            <CSSProjects max={max} />
            <FullStackProjects max={max} />
        </div>
    );
};

export default Projects;
