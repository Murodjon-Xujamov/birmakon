import React from "react";
import { Container } from "../../elements/_container";
import { CardTitle, CardWhite, Input } from "../../elements/_cards";
import { AiOutlineSearch, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import "../../../assets/scss/products.scss";

const ProductErrorsOnComplaints = () => {
  return (
    <Container>
      <CardWhite>
        <CardTitle marginBottom="20px">Ошибки по жалобам</CardTitle>
        <div className="_search_">
          <Input
            type="search"
            placeholder="Поиск по коду HM"
            marginTop="0"
            padding="2px"
            marginLeft="0"
          />
          <AiOutlineSearch className="_search_icon_" />
        </div>
        <div className="_product_create_handle_page">
          <span>Максимальное количество строк</span>
          <div className="_product_create_handle_page_box">
            <span>15 на странице</span> <BsChevronDown />
          </div>
          <div className="_product_create_handle_page_x">
            <AiOutlineLeft style={{ cursor: "pointer" }} />
            <div className="_product_create_handle_page_box"> 1 </div>
            <AiOutlineRight style={{ cursor: "pointer" }} />
          </div>
          <div className="_product_create_handle_page_x">
            <div className="_product_create_handle_page_box"> 1 </div>
          </div>
        </div>
      </CardWhite>
    </Container>
  );
};

export default ProductErrorsOnComplaints;
