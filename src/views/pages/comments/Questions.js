import React from "react";
import { Container } from "../../elements/_container";
import { CardTitle, CardWhite, Input, CardText } from "../../elements/_cards";
import "../../../assets/scss/_notion.scss";
import { Button, ButtonBlue } from "../../elements/_buttons";
import { AiOutlineSearch } from "react-icons/ai";
import { ButtonGroupComments } from "../../components/buttons/ButtonGroupProduct";

const Questions = () => {
  return (
    <Container>
      <CardWhite>
        <CardTitle>Вопросы</CardTitle>
        <ButtonGroupComments />
        <div className="_questions_link">
          Правила оформления ответов на вопросы
        </div>
        <div className="_flex">
          <div className="_search_">
            <Input
              type="search"
              placeholder="Поиск по Артикулам WB"
              marginTop="0"
              padding="2px"
              marginLeft="0"
            />
            <AiOutlineSearch className="_search_icon_" />
          </div>
          <ButtonBlue>На рассмотрении 0</ButtonBlue>
          <Button Color="#f5f5f5" marginLeft="10px">
            Архив
          </Button>
        </div>
        <CardText marginTop="20px">Обновлено 14 октября 2021 16:04:49</CardText>
        <div className="_notion_search_button_row">
          <Button></Button>
          <Button Color="#f5f5f5">Выгрузить в Exel</Button>
        </div>
      </CardWhite>
    </Container>
  );
};

export default Questions;
