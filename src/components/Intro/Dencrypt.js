import React, { useEffect } from 'react';

import { useDencrypt } from 'use-dencrypt-effect';

const values = ['CSS', 'React', 'Node.js', 'JavaScript', 'MySQL', 'HTML'];

const options = {
    chars: [
        '_',
        '<',
        '>',
        '/',
        ';',
        '{',
        '}',
        '(',
        ')',
        '=',
        '!',
        '[',
        ']',
        ',',
        '.',
        '#',
        '$',
        '?',
        '"',
        '*',
        '+',
        '-',
        '~',
    ],
};

const Dencrypt = () => {
    const { result, dencrypt } = useDencrypt(options);

    useEffect(() => {
        let i = 0;

        const action = setInterval(() => {
            dencrypt(values[i]);

            i = i === values.length - 1 ? 0 : i + 1;
        }, 2500);

        return () => clearInterval(action);
    }, []);
    return <div className="dencrypt">#{result}</div>;
};

export default Dencrypt;
