import React from "react";
import { ButtonGroupRemainsOfGoods } from "../../components/buttons/ButtonGroupProduct";
import { CardGray, CardTitle, CardWhite, Input } from "../../elements/_cards";
import { Container } from "../../elements/_container";
import { AiOutlineSearch } from "react-icons/ai";
import "../../../assets/scss/products.scss";
import { Button, ButtonBlue } from "../../elements/_buttons";

const ProductRemainsOfGoods = () => {
  return (
    <Container>
      <CardWhite>
        <CardTitle>Остатки товара</CardTitle>
        <ButtonGroupRemainsOfGoods />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor , Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor , Lorem ipsumdolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor{" "}
        </p>
        <div className="_product_remains_of_goods">
          <div className="_search_">
            <Input
              type="search"
              placeholder="Поиск по товаром"
              marginTop="0"
              padding="2px"
              marginLeft="0"
            />
            <AiOutlineSearch className="_search_icon_" />
          </div>
          <ButtonBlue>Загрузить файл с остатками</ButtonBlue>
          <Button Color="#f5f5f5" marginLeft="15px">
            Очистить все
          </Button>
        </div>
        <CardGray padding="80px" marginTop="20px">
          Нет загруженных товаров
        </CardGray>
      </CardWhite>
    </Container>
  );
};

export default ProductRemainsOfGoods;
