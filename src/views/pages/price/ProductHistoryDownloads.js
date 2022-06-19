import React from "react";
import { Container } from "../../elements/_container";
import { CardGray, CardTitle, CardWhite } from "../../elements/_cards";
import { ButtonGroupSettingDiscount } from "../../components/buttons/ButtonGroupProduct";
import "../../../assets/scss/products.scss";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

const ProductHistoryDownloads = () => {
  return (
    <Container>
      <CardWhite>
        <ButtonGroupSettingDiscount />
        <CardTitle marginTop="20px">История загрузок</CardTitle>
        <CardGray marginTop="15px" padding="80px"></CardGray>
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

export default ProductHistoryDownloads;
