import React from 'react';
import Typewriter from 'typewriter-effect';

const TypeWriter = () => {
    return (
        <div className="typing flex items-center mr-3">
            <Typewriter
                // options={{
                //     autoStart: true,
                //     loop: true,
                // }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString('Welcome to my portfolio!')
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString('I work with JavaScript')
                        .pauseFor(1000)
                        .deleteChars(10)
                        .typeString('React')
                        .pauseFor(1000)
                        .deleteChars(5)
                        .typeString('CSS')
                        .pauseFor(1000)
                        .deleteChars(3)
                        .typeString('HTML')
                        .pauseFor(1000)
                        .deleteChars(4)
                        .typeString('Node.js')
                        .pauseFor(1000)
                        .deleteChars(7)
                        .typeString('MySQL')
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString('Please, take a look at my projects!')
                        .pauseFor(2000)
                        .start();
                }}
            />
        </div>
    );
};

export default TypeWriter;
