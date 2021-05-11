import React, { useState } from 'react';
import clipboard from '../icons/clipboard';
import clipboard2 from '../icons/clipboard2';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    return (
        <div className="contact flex flex-col items-center my-5">
            <div className="container bg-2-hex p-4">
                <h1 className="mb-3">Contact</h1>
                <li>
                    <a
                        href="https://www.linkedin.com/in/andres-sc/"
                        target="_blank"
                        rel="noreferrer"
                        className="col-4-hex underline"
                    >
                        Linkedin
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/An3SC"
                        target="_blank"
                        rel="noreferrer"
                        className="col-4-hex underline"
                    >
                        Github
                    </a>
                </li>
                <li>+34 671 893 602</li>
                <div className="flex items-center">
                    <li>sierracardalda@gmail.com</li>
                    <CopyToClipboard
                        onCopy={() => setCopied(!copied)}
                        text={'sierracardalda@gmail.com'}
                    >
                        {copied ? (
                            <button>{clipboard2}</button>
                        ) : (
                            <button>{clipboard}</button>
                        )}
                    </CopyToClipboard>
                </div>
            </div>
        </div>
    );
};

export default Contact;
