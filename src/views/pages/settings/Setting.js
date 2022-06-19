import React from "react";
import { Container } from "../../elements/_container";
import { CardGray, CardTitle, CardWhite } from "../../elements/_cards";
import { ButtonGroupSettings } from "../../components/buttons/ButtonGroupProduct";
import { Button } from "../../elements/_buttons";

const setting = () => {
  return (
    <Container>
      <CardWhite>
        <CardTitle>Настройки</CardTitle>
        <ButtonGroupSettings />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor , Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor , Lorem ipsumdolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor{" "}
        </p>
        <Button border="1px">Добавить пропуск</Button>
        <CardGray padding="80px" marginTop="20px">
          Нет загруженных товаров
        </CardGray>
      </CardWhite>
    </Container>
  );
};

export default setting;
