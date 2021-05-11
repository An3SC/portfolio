import React, { useRef, useState } from 'react';
import { useOnClickOutside } from '../hooks';
import Burger from './Burger/Burger';
import Menu from './Burger/Menu';
import andresLogo from '../icons/andres-imagotipo.svg';
import Dencrypt from './Intro/Dencrypt';
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    return (
        <div className="header container-xl mx-auto flex items-center px-4 bg-2-hex">
            <Link to="/" className="flex-1">
                <img className="andresLogo" alt="andresLogo" src={andresLogo}></img>
            </Link>
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>{' '}
            <div className="flex-1 flex justify-center mt-20">
                <Dencrypt />
            </div>
        </div>
    );
};

export default Header;
