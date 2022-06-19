import React from "react";
import { Container } from "../../elements/_container";
import { CardTitle, CardWhite } from "../../elements/_cards";
import { GrDocumentWindows } from "react-icons/gr";
import { ButtonGroupSettingDiscount } from "../../components/buttons/ButtonGroupProduct";
import { AiOutlineDownload } from "react-icons/ai";
// import "../../../assets/scss/_price.scss";

const ProductCancelDiscount = () => {
  return (
    <Container>
      <CardWhite>
        <ButtonGroupSettingDiscount />
        <CardTitle marginTop="20px">Отменить скидку</CardTitle>
        <div className="_price_button_box_dashid">
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

export default ProductCancelDiscount;
