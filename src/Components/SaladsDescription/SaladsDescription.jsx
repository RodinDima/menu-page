import React from "react";

import { PageText } from "../../Constants";

import Salads from "./Image/salad.png";


import "./style.css";

const SaladsDescription = () => {
  return (
    <>
      <div className="description__container">
        <h3 className="description__title">
          {PageText.saladDescription.titleOne}
        </h3>
        <h4 className="description__subTitle">
          {PageText.saladDescription.titleTwo}
        </h4>
        <p className="description__text">
          {PageText.saladDescription.saladText}
        </p>
      </div>
      <div className="description__image">
        <img src={Salads} alt="salads" />
      </div>
    </>
  );
};

export default SaladsDescription;
