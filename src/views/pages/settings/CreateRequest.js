import React from "react";
import {
  CardText,
  CardTitle,
  CardWhite,
  GridTwo,
  Select,
  TextArea,
  CardGray,
} from "../../elements/_cards";
import { Container } from "../../elements/_container";
import { ButtonGroupSupport } from "../../components/buttons/ButtonGroupProduct";
import "../../../assets/scss/style.scss";

const CreateRequest = () => {
  return (
    <Container>
      <CardWhite>
        <CardTitle>Поддержка</CardTitle>
        <ButtonGroupSupport />
        <GridTwo>
          <div>
            <CardText>Категория</CardText>
            <Select>
              <option>1-поддержка</option>
            </Select>
          </div>
          <div>
            <CardText>Тема</CardText>
            <Select>
              <option>Аналитических отчеты(ошибка)</option>
            </Select>
          </div>
        </GridTwo>
        <CardText marginTop="20px">Комментарий</CardText>
        <TextArea placeholder="Опишите проблему" rows="12" />
        <CardGray marginTop="15px">
          <div className="_request_create">
            Нажмите или перетяните сюда файл
          </div>
        </CardGray>
      </CardWhite>
    </Container>
  );
};

export default CreateRequest;
