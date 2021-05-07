import React from 'react';
import { bool, func } from 'prop-types';

const Menu = ({ open }) => {
    const menu = document.querySelector('.styledMenu');

    if (open) {
        menu && menu.classList.remove('closedMenu');
    } else {
        menu && menu.classList.add('closedMenu');
    }

    return (
        <div className="fixed styledMenu closedMenu" open={open}>
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>
    );
};

Menu.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Menu;
