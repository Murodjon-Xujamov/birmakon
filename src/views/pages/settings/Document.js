import React from "react";
import { Container } from "../../elements/_container";
import {
  CardTitle,
  CardWhite,
  Input,
  InputData,
  Select,
} from "../../elements/_cards";
import { AiOutlineSearch } from "react-icons/ai";
import "../../../assets/scss/style.scss";

const Document = () => {
  return (
    <Container>
      <CardWhite>
        <CardTitle>Документы</CardTitle>
        <div className="_document_row">
          <div className="_search_">
            <Input
              type="search"
              placeholder="Search"
              marginTop="0"
              padding="2px"
              marginLeft="0"
            />
            <AiOutlineSearch className="_search_icon_" />
          </div>
          <InputData type="datetime-local" className="_datetime_local" />
          <Select width="fit-content" marginTop="0" marginLeft="10px">
            <option>Выберите тип документа</option>
            <option>Выберите тип документа</option>
            <option>Выберите тип документа</option>
            <option>Выберите тип документа</option>
          </Select>
        </div>
      </CardWhite>
    </Container>
  );
};

export default Document;
