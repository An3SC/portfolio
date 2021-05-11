import React from 'react';
import { bool, func } from 'prop-types';
import { Link } from 'react-router-dom';

const Menu = ({ open, setOpen }) => {
    const menu = document.querySelector('.styledMenu');

    if (open) {
        menu && menu.classList.remove('closedMenu');
    } else {
        menu && menu.classList.add('closedMenu');
    }

    return (
        <div
            className="fixed styledMenu closedMenu"
            open={open}
            onClick={() => setOpen(!open)}
        >
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
};

Menu.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Menu;
