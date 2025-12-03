import React from 'react';
import NavMenu from './NavMenu';

const navLinks = [
    { id: 1, url: '#about', text:'About me' },
    { id: 2, url: '#experience', text:'Experience' },
    { id: 3, url: '#projects', text:'Projects' },
    { id: 4, url: '#contact', text:'Contact' },
    { id: 5, url: '#skill-&-tool', text:'Skill/Tool' },
];

const Header = () => {
    return (
        <header>
            <h1>Haniel Xuan López Cornelis | Software Developer</h1>
            <NavMenu links={navLinks} />
        </header>
    );
};

export default Header; 