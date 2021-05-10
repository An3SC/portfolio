import React from 'react';
import fullStackProjects from '../../api/fullStackProjects.json';
import CardsMore from './CardsMore';
import ProjectCards from './ProjectCards';

const FullStackProjects = (props) => {
    const { max } = props;
    const actualPage = window.location.href;

    return (
        <div className="container bg-2-hex flex flex-col items-center p-4">
            <h1 className="flex justify-center">Full Stack</h1>
            <div className="grid grid-cols-2 gap-4">
                {fullStackProjects &&
                    fullStackProjects
                        .slice(0, max)
                        .map((f) => (
                            <ProjectCards
                                key={f.name}
                                name={f.name}
                                url={f.url}
                                img={f.img}
                                tags={f.tags}
                                repo={f.repo}
                            />
                        ))}
                {!actualPage.includes('projects') && <CardsMore />}
            </div>
        </div>
    );
};

export default FullStackProjects;
