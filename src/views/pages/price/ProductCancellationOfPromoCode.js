import React from "react";
import { Container } from "../../elements/_container";
import { CardText, CardTitle, CardWhite, GridTwo } from "../../elements/_cards";
import { ButtonGroupSettingDiscount } from "../../components/buttons/ButtonGroupProduct";
import { GrDocumentWindows } from "react-icons/gr";
import { AiOutlineDownload } from "react-icons/ai";
// import "../../../assets/scss/_price.scss";

const ProductCancellationOfPromoCode = () => {
  return (
    <Container>
      <CardWhite>
        <ButtonGroupSettingDiscount />
        <CardTitle marginTop="20px">Отмена промокода</CardTitle>
        <GridTwo marginTop="15px">
          <div>
            <CardText marginBottom="15px">Промокод на список товаров</CardText>
            <div className="_price_button_box_dashid">
              <label className="_price_box_dashid" id="fileDocument">
                Нажмите, либо перетащите сюда файл
                <input id="fileDocument" type="file" className="filePicker" />
              </label>
            </div>
            <label
              htmlFor="filePicker"
              className="_label_button_file _fit_content _margin_top"
            >
              <AiOutlineDownload size="17px" />
              <span>Загрузить файл</span>
              <input id="filePicker" type="file" className="filePicker" />
            </label>
          </div>
          <div>
            <label
              htmlFor="fileExsel"
              className="_label_exsel_button_lenear _fit_content"
            >
              <GrDocumentWindows />
              <span>Выгрузить в EXCEL Текущие данные</span>
              <input id="fileExsel" type="file" className="filePicker" />
            </label>
            <CardText>Шаблон для отмены скидок</CardText>
          </div>
        </GridTwo>
        <CardText marginTop="20px">Промокод на весь ассортимент</CardText>
        <h6>Нет установленного промокода на весь ассортимент</h6>
      </CardWhite>
    </Container>
  );
};

export default ProductCancellationOfPromoCode;
