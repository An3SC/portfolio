import React from 'react';
import Dencrypt from './Dencrypt';
import TypeWriter from './TypeWriter';

const Intro = () => {
    return (
        <div className="flex flex-col items-center my-5">
            <div className="container bg-2-hex p-4 flex justify-between items-center">
                <TypeWriter />
                <Dencrypt />
            </div>
        </div>
    );
};

export default Intro;
