import React from "react";
import { CardTitle, CardWhite, Input } from "../../elements/_cards";
import { Container } from "../../elements/_container";
import { ButtonGroupProductSave } from "../../components/buttons/ButtonGroupProduct";
import "../../../assets/scss/products.scss";
import { ButtonBlue } from "../../elements/_buttons";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

const ProductBarcodeSuccess = () => {
  return (
    <Container>
      <CardWhite>
        <CardTitle>Загрузка и генерация штрихкодов</CardTitle>
        <ButtonGroupProductSave />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor , Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor , Lorem ipsumdolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
        <div className="_product_barcode_success">
          <Input type="number" placeholder="0" marginTop="0" />
          <ButtonBlue marginLeft="10px" width="-webkit-fill-available">
            Cгенерировать штрихкоды
          </ButtonBlue>
        </div>
        <div className="_product_barcode_success_elements_row">
          <div className="_product_barcode_success_column">
            <span>Дата генерации</span>
            <div className="_product_barcode_success_column_box"></div>
          </div>
          <div className="_product_barcode_success_column">
            <span>Количество</span>
            <div className="_product_barcode_success_column_box"></div>
          </div>
        </div>
        <div className="_product_create_handle_page">
          <span>Добавить товар</span>
          <div className="_product_create_handle_page_box">
            <span>10</span> <BsChevronDown />
          </div>
          <div className="_product_create_handle_page_x">
            <AiOutlineLeft style={{ cursor: "pointer" }} />
            <div className="_product_create_handle_page_box"> 1 </div>
            <AiOutlineRight style={{ cursor: "pointer" }} />
          </div>
        </div>
      </CardWhite>
    </Container>
  );
};

export default ProductBarcodeSuccess;
