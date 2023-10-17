import React from "react";

import HeaderButton from "../HeaderButton/HeaderButton";
import { PageText } from "../../Constants";

import Logo from "./Image/logo.svg";

import "./style.css";

const Header = () => {
  return (
    <>
      <div className="header__container">
        <a href="#" className="header__link">
          <img src={Logo} alt="logo" className="header__img" />
        </a>

        <div className="header__right">
          <nav className="header__menu">
            <ul className="header__menu-list">
              <li className="header__menu-item">
                <a href="#" className="header__menu-link">
                  {PageText.headerTextMenu.textOne}
                </a>
              </li>
              <li className="header__menu-item">
                <a href="#" className="header__menu-link">
                  {PageText.headerTextMenu.textTwo}
                </a>
              </li>
              <li className="header__menu-item">
                <a href="#" className="header__menu-link">
                  {PageText.headerTextMenu.textThree}
                </a>
              </li>
            </ul>
          </nav>
          <HeaderButton buttonText="order now" />
        </div>
      </div>
    </>
  );
};

export default Header;
