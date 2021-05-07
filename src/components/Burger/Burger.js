import React from 'react';
import { bool, func } from 'prop-types';

const Burger = ({ open, setOpen }) => {
    const burger = document.querySelector('.styledBurger');
    const burgerFirst = document.querySelector('.styledBurger > :first-child');
    const burgerSecond = document.querySelector('.styledBurger > :nth-child(2)');
    const burgerThird = document.querySelector('.styledBurger > :nth-child(3)');

    if (open && burger) {
        burgerFirst.style.transform = 'rotate(43deg)';
        burgerFirst.style.background = 'var(--hex-4)';
        burgerSecond.style.opacity = '0';
        burgerSecond.style.transform = 'translateX(20px)';
        burgerThird.style.transform = 'rotate(-43deg)';
        burgerThird.style.background = 'var(--hex-4)';
        burger.style.background = 'transparent';
    } else if (!open && burger) {
        burgerFirst.style.transform = 'rotate(0)';
        burgerFirst.style.background = 'var(--white)';
        burgerSecond.style.opacity = '1';
        burgerSecond.style.transform = 'translateX(0)';
        burgerThird.style.transform = 'rotate(0)';
        burgerThird.style.background = 'var(--white)';
        burger.style.background = 'var(--hex-2)';
    }

    return (
        <div className="fixed styledBurger" open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </div>
    );
};

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Burger;
