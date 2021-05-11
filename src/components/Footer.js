import React from 'react';
import github from '../icons/github';

const Footer = () => {
    return (
        <div className="footer container-xl mx-auto px-4 bg-2-hex">
            <div className="flex flex-col items-end">
                <div className="flex items-center mt-5">
                    <p>Made with React and Tailwind</p>
                    <a
                        href="https://github.com/An3SC/portfolio"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {github}
                    </a>
                </div>
                <p>
                    Brand icons made by
                    <a
                        href="https://www.coradvil.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="col-4-hex ml-2 underline"
                    >
                        Cora D.
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
