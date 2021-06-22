import React from 'react';
import frontEnd from '../../api/frontEndProjects.json';
import CardsMore from './CardsMore';
import ProjectCards from './ProjectCards';

const FrontEnd = (props) => {
    const { max } = props;
    const actualPage = window.location.href;

    return (
        <div className="container bg-2-hex flex flex-col items-center p-4">
            <h1 className="flex justify-center">Front-End</h1>
            <div className="grid grid-cols-2 gap-4">
                {frontEnd &&
                    frontEnd
                        .slice(0, max)
                        .map((c) => (
                            <ProjectCards
                                key={c.name}
                                name={c.name}
                                url={c.url}
                                img={c.img}
                                tags={c.tags}
                                repo={c.repo}
                            />
                        ))}
                {!actualPage.includes('projects') && <CardsMore />}
            </div>
        </div>
    );
};

export default FrontEnd;
