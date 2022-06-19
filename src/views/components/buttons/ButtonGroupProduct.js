import React from "react";
import { Button } from "../../elements/_buttons";
import { Link } from "react-router-dom";

export const ButtonGroupProduct = () => {
  return (
    <div className="_button_group">
      <Link to="/product">
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
      <Link to="/product/barcode/generate">
        <Button
          borderBottom="3px"
          paddingLeft="20px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
        >
          Ползователи
        </Button>
      </Link>
    </div>
  );
};

export const ButtonGroupProductSave = () => {
  return (
    <div className="_button_group">
      <Link to="/product/barcode/success">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          Загрузка штрихкодов
        </Button>
      </Link>
      <Link to="/product/barcode/save">
        <Button
          borderBottom="3px"
          paddingLeft="20px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
        >
          Генерация штрихкодов
        </Button>
      </Link>
    </div>
  );
};

export const ButtonGroupReturn = () => {
  return (
    <div className="_button_group">
      <Link to="/product/return">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          История заявок
        </Button>
      </Link>
    </div>
  );
};

export const ButtonGroupBlocking = () => {
  return (
    <div className="_button_group">
      <Link to="/product/blocking-of-goods">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          Блокировка
        </Button>
      </Link>
      <Link to="/product/discontinued">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          Снятые с продажи
        </Button>
      </Link>
    </div>
  );
};

export const ButtonGroupFactories = () => {
  return (
    <div className="_button_group_factories">
      <Link to="/product/factories">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          Заводы
        </Button>
      </Link>
      <Link to="/product/factories">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          Массовое добавление изготовителя
        </Button>
      </Link>
      <Link to="/product/factories">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          Массовое добавление изготовителя
        </Button>
      </Link>
    </div>
  );
};

export const ButtonGroupSettingDiscount = () => {
  return (
    <div className="_button_group_factories">
      <Link to="/product/setting-discount">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          Установка скидки
        </Button>
      </Link>
      <Link to="/product/setting-price">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          Установка цены
        </Button>
      </Link>
      <Link to="/product/cancel-discount">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          Отмена скидки
        </Button>
      </Link>
      <Link to="/product/installing-promo-codes">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          Установка промокодов
        </Button>
      </Link>
      <Link to="/product/cancellation-of-promo-code">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          Отмена промокодов
        </Button>
      </Link>
      <Link to="/product/history-downloads">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          История загрузок
        </Button>
      </Link>
    </div>
  );
};

export const ButtonGroupReturnToPick = () => {
  return (
    <div className="_button_group">
      <Link to="/product/return-to-pick-up-point">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          Создание заявки
        </Button>
      </Link>
      <Link to="/product/my-applications">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          Мои заявки
        </Button>
      </Link>
    </div>
  );
};

export const ButtonGroupComments = () => {
  return (
    <div className="_button_group">
      <Link to="/comment/notion">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          Отзывы
        </Button>
      </Link>
      <Link to="/comment/questions">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          Вопросы
        </Button>
      </Link>
    </div>
  );
};

export const ButtonGroupRemainsOfGoods = () => {
  return (
    <div className="_button_group">
      <Link to="/product/product-remains">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          Остатки
        </Button>
      </Link>
      <Link to="/product/product-remains">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          Загрузка
        </Button>
      </Link>
    </div>
  );
};

export const ButtonGroupSettings = () => {
  return (
    <div className="_button_group">
      <Link to="/product/setting">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          Пропуска
        </Button>
      </Link>
      <Link to="/product/setting">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          Склад поставщика
        </Button>
      </Link>
    </div>
  );
};

export const ButtonGroupFinancialReports = () => {
  return (
    <div className="_button_group">
      <Link to="/financial-reports">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          Загрузка штрихкодов
        </Button>
      </Link>
      <Link to="/financial-reports">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          Генерация штрихкодов
        </Button>
      </Link>
    </div>
  );
};

export const ButtonGroupSupport = () => {
  return (
    <div className="_button_group">
      <Link to="/support">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          История заявок
        </Button>
      </Link>
      <Link to="/create-request">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          Создать заявку
        </Button>
      </Link>
    </div>
  );
};

export const ButtonGroupInstructions = () => {
  return (
    <div className="_button_group">
      <Link to="/instructions">
        <Button
          borderBottom="3px"
          paddingLeft="2px"
          paddingRight="20px"
          paddingTop="5px"
          paddingBottom="10px"
          className="_button_active"
        >
          История заявок
        </Button>
      </Link>
    </div>
  );
};
