import React from "react";
import { Container } from "../../elements/_container";
import { CardTitle, CardWhite } from "../../elements/_cards";
import Shtrex from "../../../assets/img/shtrex.png";
import Shtrex2 from "../../../assets/img/shtrex.jpg";
import "../../../assets/scss/style.scss";

const RequirementsForStickers = () => {
  return (
    <Container>
      <CardWhite>
        <CardTitle>Требования к стикеру</CardTitle>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor , Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor , Lorem ipsumdolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor{" "}
        </p>
        <div className="_shtrexx_code">
          <img src={Shtrex} alt="Shtrex Code" className="_shtrexx_code_img" />
        </div>
        <p>
          Этикетка также доступна в разделе Сборочные задания в Личном Кабинете
          поставщика.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor , Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor , Lorem ipsumdolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor{" "}
        </p>
        <CardTitle>Настройки печати:</CardTitle>
        <ul>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor , Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
        </p>
        <CardTitle>Примеры некорректной печати:</CardTitle>
        <div className="_requirement_card">
          <div className="_requirement_card_img">
            <img src={Shtrex} alt="Shtrex code" />
          </div>
          <div className="_requirement_card_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor , Lorem ipsum dolor sit amet.
          </div>
        </div>
        <div className="_requirement_card">
          <div className="_requirement_card_img">
            <img src={Shtrex2} alt="Shtrex code" />
          </div>
          <div className="_requirement_card_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor , Lorem ipsum dolor sit amet.
          </div>
        </div>
      </CardWhite>
    </Container>
  );
};

export default RequirementsForStickers;
