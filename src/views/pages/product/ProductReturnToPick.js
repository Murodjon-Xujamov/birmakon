import React from "react";
import { ButtonGroupReturnToPick } from "../../components/buttons/ButtonGroupProduct";
import {
  CardGray,
  CardText,
  CardTitle,
  CardWhite,
  Input,
  TextArea,
} from "../../elements/_cards";
import { Container } from "../../elements/_container";
import "../../../assets/scss/products.scss";

const ProductReturnToPick = () => {
  return (
    <Container>
      <CardWhite>
        <CardTitle>Возврат в пункт выдачи</CardTitle>
        <ButtonGroupReturnToPick />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor , Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor Lorem ipsum dolor sit amet,
        </p>
        <h4>Выберите пункт выдачи заказов для возврата</h4>
        <CardText marginTop="20px" marginBottom="20px">
          Причина возврата
        </CardText>
        <TextArea rows="7" placeholder="Ваш комментарий" marginBottom="20px" />
        <h4>Выберите товары на возврат</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor , Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor Lorem ipsum dolor sit amet,
        </p>
        <CardText>Выберите склад</CardText>
        <div className="product_return_to_pick">
          <Input width="30%" marginRight="10px" placeholder="Выбрать" />
          <Input width="30%" placeholder="Поиск по товаром" />
        </div>
        <CardGray padding="50px" marginTop="20px">
          Для выбора товаров и создания заявки на возврат необходимо выбрать
          склад
        </CardGray>
      </CardWhite>
    </Container>
  );
};

export default ProductReturnToPick;
