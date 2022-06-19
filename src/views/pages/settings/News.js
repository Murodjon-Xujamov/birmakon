import React from "react";
import {
  CardGray,
  CardText,
  CardTitle,
  CardWhite,
  GridTwo,
  Input,
} from "../../elements/_cards";
import { Container } from "../../elements/_container";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdCopy } from "react-icons/io";
import { Button, ButtonBlue } from "../../elements/_buttons";
import "../../../assets/scss/style.scss";

const News = () => {
  return (
    <Container>
      <CardWhite>
        <CardTitle marginBottom="20px">Новости</CardTitle>
        <div className="_search_full">
          <Input
            type="search"
            placeholder="Search"
            marginTop="0"
            width="98%"
            padding="2px"
            marginLeft="0"
          />
          <AiOutlineSearch className="_search_icon_" />
        </div>
        <div className="_news_button_row">
          <ButtonBlue className="_news_button">Все</ButtonBlue>
          <Button Color="#f5f5f5" className="_news_button">
            Портал
          </Button>
          <Button Color="#f5f5f5" className="_news_button">
            Условия сотрудничества
          </Button>
          <Button Color="#f5f5f5" className="_news_button">
            Пресс-центр
          </Button>
          <Button Color="#f5f5f5" className="_news_button">
            Маркетинг
          </Button>
        </div>
        <CardTitle marginTop="20px" marginBottom="15px">
          Отгрузка Микс Коробами
        </CardTitle>
        <CardText>Уважаемые Продавцы!</CardText>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor , Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor , Lorem ipsumdolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor{" "}
        </p>
        <div className="_news_informations">
          <CardText>16 октября 2021 г.</CardText>
          <CardText className="_news_information_market">
            Маркетинг <IoMdCopy />
          </CardText>
        </div>
        <GridTwo marginTop="20px">
          <CardGray padding="20px" textAlign="start">
            <CardTitle>Внимание! Новый опрос</CardTitle>
            <CardText marginTop="10px">Уважаемые самозанятые!</CardText>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor , Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor , Lorem
              ipsumdolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor
            </p>
            <div className="_news_informations">
              <CardText>16 октября 2021 г.</CardText>
              <CardText className="_news_information_market">
                Маркетинг <IoMdCopy />
              </CardText>
            </div>
          </CardGray>
          <CardGray padding="20px" textAlign="start">
            <CardTitle>Внимание! Новый опрос</CardTitle>
            <CardText marginTop="10px">Уважаемые самозанятые!</CardText>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor , Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor , Lorem
              ipsumdolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor
            </p>
            <div className="_news_informations">
              <CardText>16 октября 2021 г.</CardText>
              <CardText className="_news_information_market">
                Маркетинг <IoMdCopy />
              </CardText>
            </div>
          </CardGray>
          <CardGray padding="20px" textAlign="start">
            <CardTitle>Внимание! Новый опрос</CardTitle>
            <CardText marginTop="10px">Уважаемые самозанятые!</CardText>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor , Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor , Lorem
              ipsumdolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor
            </p>
            <div className="_news_informations">
              <CardText>16 октября 2021 г.</CardText>
              <CardText className="_news_information_market">
                Маркетинг <IoMdCopy />
              </CardText>
            </div>
          </CardGray>
          <CardGray padding="20px" textAlign="start">
            <CardTitle>Внимание! Новый опрос</CardTitle>
            <CardText marginTop="10px">Уважаемые самозанятые!</CardText>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor , Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor , Lorem
              ipsumdolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor
            </p>
            <div className="_news_informations">
              <CardText>16 октября 2021 г.</CardText>
              <CardText className="_news_information_market">
                Маркетинг <IoMdCopy />
              </CardText>
            </div>
          </CardGray>
        </GridTwo>
      </CardWhite>
    </Container>
  );
};

export default News;
