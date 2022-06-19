import React from "react";
import { Button } from "../../elements/_buttons";
import { Link } from "react-router-dom";

const ButtonGroup = () => {
  return (
    <div className="_button_group">
      <Link to="/user-setting">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          Данный продавца
        </Button>
      </Link>
      <Link to="/user/information">
        <Button
          borderBottom="3px"
          paddingLeft="20px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
        >
          Мои Данный
        </Button>
      </Link>
    </div>
  );
};

export default ButtonGroup;
