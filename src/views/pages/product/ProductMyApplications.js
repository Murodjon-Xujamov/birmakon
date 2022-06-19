import React from "react";
import { Container } from "../../elements/_container";
import {
  CardGray,
  CardTitle,
  CardWhite,
  GridSix,
  Input,
} from "../../elements/_cards";
import { ButtonGroupReturnToPick } from "../../components/buttons/ButtonGroupProduct";
import { AiOutlineSearch } from "react-icons/ai";

const ProductMyApplications = () => {
  return (
    <Container>
      <CardWhite>
        <CardTitle>Возврат в пункт выдачи</CardTitle>
        <ButtonGroupReturnToPick />
        <div className="_product_create_app">
          <div className="_search_">
            <Input
              type="search"
              placeholder="Поиск по товаром"
              marginTop="0"
              marginLeft="0"
            />
            <AiOutlineSearch className="_search_icon_" />
          </div>
        </div>
        <GridSix marginTop="20px">
          <div>Номер заявки</div>
          <div>Кол-во товаров</div>
          <div>Склад с остатками</div>
          <div>Место приемки</div>
          <div>Статус</div>
          <div>Дата создания</div>
        </GridSix>
        <CardGray padding="70px" marginTop="15px"></CardGray>
      </CardWhite>
    </Container>
  );
};

export default ProductMyApplications;
