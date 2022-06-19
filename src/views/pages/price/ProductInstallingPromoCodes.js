import React, { useState } from "react";
import { Container } from "../../elements/_container";
import {
  CardText,
  CardTitle,
  CardWhite,
  GridTwo,
  InputData,
} from "../../elements/_cards";
import { ButtonGroupSettingDiscount } from "../../components/buttons/ButtonGroupProduct";
import { Button } from "../../elements/_buttons";
import { AiOutlineDownload } from "react-icons/ai";
import { IoMdClock } from "react-icons/io";
import { GrDocumentWindows } from "react-icons/gr";
// import "../../../assets/scss/_price.scss";

const ProductInstallingPromoCodes = () => {
  const [displayData, setDisplayData] = useState("none");
  const [displayData1, setDisplayData1] = useState("none");
  return (
    <Container>
      <CardWhite>
        <ButtonGroupSettingDiscount />
        <CardTitle marginTop="20px">Установка промокодов</CardTitle>
        <GridTwo marginTop="15px">
          <div>
            <CardText>Промокод на список товаров</CardText>
            <div className="_price_button_box_dashid">
              <label className="_price_box_dashid" id="fileDocument">
                Нажмите, либо перетащите сюда файл
                <input id="fileDocument" type="file" className="filePicker" />
              </label>
            </div>
          </div>
          <div className="_price_install_right">
            <CardText>Промокод на весь ассортимент</CardText>
            <h5>Скидка по промокоду </h5>
            <div className="_price_install_right_box">0 %</div>
          </div>
        </GridTwo>
        <GridTwo>
          <div>
            <CardText marginTop="25px">Отложенный старт</CardText>
            <div className="_price_installing_flex_row">
              <Button
                display="flex"
                className="_price_button_data_time"
                Color="#f5f5f5"
                onClick={() => {
                  setDisplayData("block");
                }}
              >
                <IoMdClock size="16" />
                <span>Установите дату</span>
              </Button>
              <InputData
                type="datetime-local"
                display={displayData}
                className="_datetime_local"
              />
            </div>
          </div>
          <div>
            <CardText marginTop="25px">Отложенный старт</CardText>
            <div className="_price_installing_flex_row">
              <Button
                display="flex"
                className="_price_button_data_time"
                Color="#f5f5f5"
                onClick={() => {
                  setDisplayData1("block");
                }}
              >
                <IoMdClock size="16" />
                <span>Установите дату</span>
              </Button>
              <InputData
                type="datetime-local"
                display={displayData1}
                className="_datetime_local"
              />
            </div>
          </div>
        </GridTwo>
        <GridTwo marginTop="20px">
          <label
            htmlFor="filePicker"
            className="_label_button_file _fit_content"
          >
            <AiOutlineDownload size="17px" />
            <span>Загрузить файл</span>
            <input id="filePicker" type="file" className="filePicker" />
          </label>
          <Button className="_price_buttun_installing_promo">Установить</Button>
        </GridTwo>
        <div className="_price_installing_footer_button">
          <label
            htmlFor="fileExsel"
            className="_label_exsel_button_lenear _fit_content"
          >
            <GrDocumentWindows />
            <span>Выгрузить в EXCEL Текущие данные</span>
            <input id="fileExsel" type="file" className="filePicker" />
          </label>
        </div>
      </CardWhite>
    </Container>
  );
};

export default ProductInstallingPromoCodes;
