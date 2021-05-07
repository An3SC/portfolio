import React from 'react';

const CardsMore = () => {
    return (
        <div className="bg-3-hex mb-3 container max-w-lg">
            <h3 className="h-12 min-h-0 flex con justify-center items-center">
                All Projects
            </h3>
            <a href="/projects" rel="noreferrer">
                <img src={'img/more2.png'} alt="more" />
            </a>

            <div className="flex justify-center space-x-5 p-3">
                <a href="/projects" rel="noreferrer" className="col-4-hex">
                    See more
                </a>
            </div>
            <div className="tags">
                <p>JavaScript</p>
                <p>React</p>
                <p>CSS</p>
                <p>HTML</p>
                <p>Node.js</p>
                <p>Express</p>
                <p>MySQL</p>
            </div>
        </div>
    );
};

export default CardsMore;
