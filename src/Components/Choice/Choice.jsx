import React from "react";

import "./style.css";
import { PageText } from "../../Constants";

const Choice = () => {
  return (
    <>
      <ul className="choice__list">
        <li className="choice__item">
          <a href="#" className="choice__link">
            {PageText.choice.choiceOne}
          </a>
        </li>
        <li className="choice__item">
          <a href="#" className="choice__link">
            {PageText.choice.choiceTwo}
          </a>
        </li>
        <li className="choice__item">
          <a href="#" className="choice__link">
            {PageText.choice.choiceThree}
          </a>
        </li>
      </ul>
    </>
  );
};

export default Choice;
