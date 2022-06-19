import React from "react";
import { CardTitle, CardWhite, Input } from "../../elements/_cards";
import { Container } from "../../elements/_container";
import { ButtonGroupProduct } from "../../components/buttons/ButtonGroupProduct";
import { AiOutlineSearch } from "react-icons/ai";
import "../../../assets/scss/products.scss";
import { Button, ButtonBlue } from "../../elements/_buttons";

const ProductBarcode = () => {
  return (
    <Container>
      <CardWhite>
        <CardTitle>Загрузка и генерация штрихкодов</CardTitle>
        <ButtonGroupProduct />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor , Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor , Lorem ipsumdolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
        <div className="_product_create_app">
          <div className="_search_">
            <Input
              type="search"
              placeholder="Search"
              marginTop="0"
              padding="2px"
              marginLeft="0"
            />
            <AiOutlineSearch className="_search_icon" />
          </div>
          <ButtonBlue>На рассмотрении 0</ButtonBlue>
          <Button Color="#f5f5f5">Архив</Button>
        </div>
      </CardWhite>
    </Container>
  );
};

export default ProductBarcode;
