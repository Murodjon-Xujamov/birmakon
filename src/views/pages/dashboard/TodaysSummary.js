import React from "react";
import "../../../assets/scss/dashboard.scss";

const UserSettings = () => {
  return (
    <div className="wrapper">
      <div className="summary">
        <div className="title">Сводка за сегодня</div>
        <div className="boxes">
          <div className="box">
            <div className="box__title">Заказали</div>
            <span>0 шт</span>
            <span className="disabled">0 шт</span>
          </div>
          <div className="box">
            <div className="box__title">Выкупили</div>
            <span>0 шт</span>
            <span className="disabled">0 шт</span>
          </div>
        </div>
      </div>
      <div className="title ml-2">Статистика Динамика продаж</div>
      <div className="statistic-box">
        <div className="box">
          <div className="box__title">Поставки</div>
          <div className="number">0</div>
        </div>
        <div className="box">
          <div className="box__title">Ошибка в товари</div>
          <div className="number">Ошибка нет</div>
        </div>
        <div className="box">
          <div className="box__title">Отзыви в товари</div>
          <div className="number">0</div>
        </div>
        <div className="box">
          <div className="box__title">Заказали</div>
          <div className="number">3558</div>
        </div>
        <div className="box">
          <div className="box__title">Выкупили</div>
          <div className="number">500</div>
        </div>
      </div>
      <div className="text-boxes">
        <div className="box">
          <div className="title">Дефицит</div>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </div>
        </div>
        <div className="box">
          <div className="title">Лист ожидания</div>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </div>
        </div>
      </div>
      <div className="order">
        <div className="box">
          <div className="box__title">Заказали</div>
          <div className="number">3558</div>
        </div>
        <div className="box">
          <div className="box__title">Заказали</div>
          <div className="number">3558</div>
        </div>
        <div className="box">
          <div className="box__title">Заказали</div>
          <div className="number">3558</div>
        </div>
      </div>
      <div className="title">Поставки</div>
      <div className="table">
        <table>
          <tr>
            <th>ID</th>
            <th>Склад</th>
            <th>Кол-во товаов</th>
            <th>Дата поставки</th>
            <th>Статус</th>
          </tr>
          <tr>
            <td>1234</td>
            <td>Москва</td>
            <td>20 000</td>
            <td>20.20.2020</td>
            <td>Завершено</td>
          </tr>
        </table>
      </div>
    </div>
    // <Container>
    //   <CardWhite>
    //     <CardTitle>Сводка за сегодня</CardTitle>
    //     <div className="dashboard_today_summary">
    //       <div className="_summary">
    //         <CardText>Заказали</CardText>
    //         <CardBlue width="80px" padding="5px" marginTop="15px">
    //           0 wt
    //         </CardBlue>
    //         <CardGray
    //           width="80px"
    //           padding="5px"
    //           marginTop="15px"
    //           marginLeft="30px"
    //         >
    //           0 wt
    //         </CardGray>
    //       </div>
    //       <div className="_summary">
    //         <CardText>Заказали</CardText>
    //         <CardBlue width="80px" padding="5px" marginTop="15px">
    //           0 wt
    //         </CardBlue>
    //         <CardGray
    //           width="80px"
    //           padding="5px"
    //           marginTop="15px"
    //           marginLeft="30px"
    //         >
    //           0 wt
    //         </CardGray>
    //       </div>
    //     </div>
    //   </CardWhite>
    //   <CardTitle marginTop="20px" marginLeft="10px">
    //     Статистика Динамика продаж
    //   </CardTitle>

    //   <GridThree marginTop="20px">
    //     <CardBlue padding="30px">
    //       <CardBlueTitle>Поставки</CardBlueTitle>
    //       <CardBlueText marginTop="25px">0</CardBlueText>
    //     </CardBlue>
    //     <CardBlue padding="30px">
    //       <CardBlueTitle>Ошибка в товари</CardBlueTitle>
    //       <CardBlueText marginTop="25px">Ошибка нет</CardBlueText>
    //     </CardBlue>
    //     <CardBlue padding="30px">
    //       <CardBlueTitle>Отзыви в товари</CardBlueTitle>
    //       <CardBlueText marginTop="25px">0</CardBlueText>
    //     </CardBlue>
    //   </GridThree>

    //   <GridTwo marginTop="20px  ">
    //     <CardBlue padding="30px">
    //       <CardBlueTitle>Заказали</CardBlueTitle>
    //       <CardBlueText marginTop="25px">3558</CardBlueText>
    //     </CardBlue>
    //     <CardBlue padding="30px">
    //       <CardBlueTitle>Выкупили</CardBlueTitle>
    //       <CardBlueText marginTop="25px">500</CardBlueText>
    //     </CardBlue>
    //   </GridTwo>

    //   <GridTwo marginTop="20px" marginBottom="20px">
    //     <CardWhite padding="30px">
    //       <CardTitle>Дефицит</CardTitle>
    //       <CardWhiteText marginTop="20px">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //         eiusmod tempor
    //       </CardWhiteText>
    //     </CardWhite>
    //     <CardWhite padding="30px">
    //       <CardTitle>Лист ожидания</CardTitle>
    //       <CardWhiteText marginTop="20px">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //         eiusmod tempor
    //       </CardWhiteText>
    //     </CardWhite>
    //   </GridTwo>
    // </Container>
  );
};

export default UserSettings;
