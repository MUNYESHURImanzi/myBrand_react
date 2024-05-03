import React from 'react';

const Header = ({Dashboard}) => {
    return (
        <header className="header" style={{position:"fixed", height:"30px"}}>
            <h1 style={{ textAlign: 'center' }}>{Dashboard}</h1>
        </header>
    );
};

export default Header;
