import React from 'react';
import logo from '../assets/images/logo.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <a className="header-link" href="/">
          <img src={logo} alt="logo"/>
        </a>
      </div>
    </header>
  );
};

export default Header;
