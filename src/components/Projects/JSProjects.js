import React from 'react';
import jsprojects from '../../api/jsprojects.json';
import CardsMore from './CardsMore';
import ProjectCards from './ProjectCards';

const JSProyects = (props) => {
    const { max } = props;
    const actualPage = window.location.href;

    return (
        <div className="container bg-2-hex flex flex-col items-center p-4">
            <h1 className="flex justify-center">JavaScript</h1>
            <div className="grid grid-cols-2 gap-4">
                {jsprojects &&
                    jsprojects
                        .slice(0, max)
                        .map((j) => (
                            <ProjectCards
                                key={j.name}
                                name={j.name}
                                url={j.url}
                                img={j.img}
                                tags={j.tags}
                                repo={j.repo}
                            />
                        ))}
                {!actualPage.includes('projects') && <CardsMore />}
            </div>
        </div>
    );
};
export default JSProyects;
