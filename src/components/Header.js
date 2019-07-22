import React from 'react';
import Proptypes from 'prop-types';

const Header = ({ titulo }) => (
    <nav className="nav-wrapper light-blue darken-3">
        <a className="brand-logo center" href="#!"> {titulo} </a>
    </nav>
);

Header.protoType ={
    titulo: Proptypes.string.isRequired
}

export default Header;
