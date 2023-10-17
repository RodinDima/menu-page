import React from "react";

import "./style.css";

const HeaderButton = (props) => {
  const { buttonText } = props;
  return (
    <>
      <a className="header__btn" href="#">
        <button>{buttonText}</button>
      </a>
    </>
  );
};

export default HeaderButton;
