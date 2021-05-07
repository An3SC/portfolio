import React, { useRef, useState } from 'react';
import { useOnClickOutside } from '../hooks';
import Burger from './Burger/Burger';
import Menu from './Burger/Menu';

const Header = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    return (
        <div className="container-xl mx-auto flex items-center h-24 px-4 bg-2-hex ">
            <a href="/" className="flex-1">
                Andrés Sierra Cardalda
            </a>
            <div className="flex-1" ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
        </div>
    );
};

export default Header;
