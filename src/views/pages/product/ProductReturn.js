import React from "react";
import {
  CardGray,
  CardTitle,
  CardWhite,
  GridFour,
} from "../../elements/_cards";
import { Container } from "../../elements/_container";
import { ButtonGroupReturn } from "../../components/buttons/ButtonGroupProduct";
import "../../../assets/scss/products.scss";

const Product = () => {
  return (
    <Container>
      <CardWhite>
        <CardTitle>Загрузка и генерация штрихкодов</CardTitle>
        <ButtonGroupReturn />
        <GridFour marginBottom="15px">
          <div>Статус</div>
          <div>Кол-во товаров</div>
          <div>Кол-во артикулов</div>
          <div>Дата создания заявки</div>
        </GridFour>
        <CardGray padding="80px">Нет загруженных товаров</CardGray>
      </CardWhite>
    </Container>
  );
};

export default Product;
