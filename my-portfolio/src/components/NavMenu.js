import React from 'react';

const NavMenu = ({ links }) => {
    if (!links || links.length === 0){
        return null; //consultar nuevamente a la IA
    }

    return (
        <nav>
            <ul>
                {links.map((link) => (
                    <li key={link.id}>
                        <a href={link.url}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </nav>  
    );
};

export default NanMenu;