import React from "react";
import { Container } from "../../elements/_container";
import {
  CardText,
  CardTitle,
  CardWhite,
  GridFour,
  InputData,
  Select,
  Input,
} from "../../elements/_cards";
import { ButtonGroupFinancialReports } from "../../components/buttons/ButtonGroupProduct";
import {
  Button,
  ButtonBlue,
  ButtonCenter,
  ButtonLeft,
  ButtonRight,
} from "../../elements/_buttons";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import "../../../assets/scss/style.scss";
import { AiOutlineDownload } from "react-icons/ai";

const FinancialReports = () => {
  return (
    <Container>
      <CardWhite>
        <CardTitle>Финансовые отчёты</CardTitle>
        <ButtonGroupFinancialReports />
        <div>
          <ButtonLeft>Еженедельные</ButtonLeft>
          <ButtonCenter>Ежемесячные</ButtonCenter>
          <ButtonCenter>Шаблон заказа</ButtonCenter>
          <ButtonRight>Сводные по месяцу</ButtonRight>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor , Lorem ipsum dolor sit amet.
        </p>
        <GridFour>
          <div>
            <CardText>Статус оплаты</CardText>
            <Select>
              <option>Все статусы</option>
              <option>Telefon</option>
              <option>Kompyuter</option>
            </Select>
          </div>
          <div>
            <CardText>Период</CardText>
            <InputData type="datetime-local" className="_datetime_local" />
          </div>
          <div>
            <CardText>Поиск по номеру отчёта</CardText>
            <Input placeholder="Номер отчета" />
          </div>
          <div>
            <CardText> .</CardText>
            <Button
              marginTop="10px"
              Color="#f5f5f5"
              border="1px"
              display="flex"
              className="_financial_report_question"
            >
              <BsFillQuestionCircleFill />
              Справка
            </Button>
          </div>
        </GridFour>
        <div className="_financial_report_save_button">
          <ButtonBlue className="_financial_save_button">
            <AiOutlineDownload size="18" />
            Скачать excel
          </ButtonBlue>
        </div>
      </CardWhite>
    </Container>
  );
};

export default FinancialReports;
