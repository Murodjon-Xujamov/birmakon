import React from "react";
import { CardText, CardTitle, CardWhite, Input } from "../../elements/_cards";
import { Container } from "../../elements/_container";
import "../../../assets/scss/products.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { ButtonGroupBlocking } from "../../components/buttons/ButtonGroupProduct";

const ProductDiscontinued = () => {
  return (
    <>
      <Container>
        <CardWhite>
          <CardTitle>Блокировка товаров</CardTitle>
          <ButtonGroupBlocking />
          <div className="_product_create_app">
            <div className="_search_">
              <Input
                type="search"
                placeholder="Search"
                marginTop="0"
                marginLeft="0"
              />
              <AiOutlineSearch className="_search_icon_" />
            </div>
          </div>
          <CardText marginTop="20px">Нет снятых с продаж товаров</CardText>
        </CardWhite>
      </Container>
    </>
  );
};

export default ProductDiscontinued;
