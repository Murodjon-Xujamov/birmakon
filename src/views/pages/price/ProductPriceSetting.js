import React, { useState } from "react";
import { Container } from "../../elements/_container";
import {
  CardTitle,
  CardWhite,
  CardText,
  Form,
  FormGroup,
} from "../../elements/_cards";
import { ButtonGroupSettingDiscount } from "../../components/buttons/ButtonGroupProduct";
// import "../../../assets/scss/_price.scss";
import { GrDocumentWindows } from "react-icons/gr";
import { AiOutlineDownload } from "react-icons/ai";

const ProductPriceSetting = () => {
  const [currentRadioValue, setCurrentRadioValue] = useState();
  const handleRadioChange = (e) => {
    setCurrentRadioValue(e.target.value);
  };
  return (
    <Container>
      <CardWhite>
        <ButtonGroupSettingDiscount />
        <CardTitle marginTop="20px">Установка цены</CardTitle>
        <CardText marginTop="15px">Выберите тип загрузки цены:</CardText>
        <div className="_price_button_box_dashid">
          <Form className="_price_price_setting">
            <FormGroup>
              <input
                id="radio-item-1"
                name="radio-item-1"
                type="radio"
                value="radio-1"
                onChange={handleRadioChange}
                checked={currentRadioValue === "radio-1"}
              />
              <label htmlFor="radio-item-1" className="_chekbox_label">
                Поартикульно
              </label>
            </FormGroup>
            <FormGroup marginLeft="20px">
              <input
                id="radio-item-2"
                name="radio-item-2"
                type="radio"
                value="radio-2"
                onChange={handleRadioChange}
                checked={currentRadioValue === "radio-2"}
              />
              <label htmlFor="radio-item-2" className="_chekbox_label">
                Поартикульно
              </label>
            </FormGroup>
          </Form>
          <label className="_price_box_dashid" id="fileDocument">
            Нажмите, либо перетащите сюда файл
            <input id="fileDocument" type="file" className="filePicker" />
          </label>
        </div>
        <div className="_price_flex">
          <label htmlFor="filePicker" className="_label_button_file">
            <AiOutlineDownload size="17px" />
            <span>Загрузить файл</span>
            <input id="filePicker" type="file" className="filePicker" />
          </label>
          <label htmlFor="fileExsel" className="_label_exsel_button_lenear">
            <GrDocumentWindows />
            <span>Выгрузить в EXCEL Текущие данные</span>
            <input id="fileExsel" type="file" className="filePicker" />
          </label>
        </div>
      </CardWhite>
    </Container>
  );
};

export default ProductPriceSetting;
