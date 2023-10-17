import React from "react";

import "./style.css";

import Header from "../Header/Header";
import SaladsDescription from "../SaladsDescription/SaladsDescription";
import SaladsCard from "../SaladsCard/SaladsCard";
import Choice from "../Choice/Choice";

const Card = () => {
  return (
    <div className="card__container">
      <div className="card__inner">
        <Header />

        <div className="card__content">
          <div className="card__content-descr">
            <SaladsDescription />
          </div>

          <div className="card__content-item">
            <Choice />
            <SaladsCard />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
