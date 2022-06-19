import React from "react";
import "../../../assets/scss/analytic.scss";
const ProductBlockingOfGoods = () => {
  return (
    // <div className="wrapper">
    //   <div className="title">Аналитика</div>
    //   <div className="analytic__boxes">
    //     <div className="box yellow">
    //       <svg
    //         className="radial-progress"
    //         data-percentage="12"
    //         viewBox="0 0 80 80"
    //       >
    //         <circle className="incomplete" cx="40" cy="40" r="35"></circle>
    //         <circle
    //           className="complete"
    //           cx="40"
    //           cy="40"
    //           r="35"
    //           style="stroke-dashoffset: 39.58406743523136;"
    //         ></circle>
    //         <text
    //           className="percentage"
    //           x="50%"
    //           y="57%"
    //           transform="matrix(0, 1, -1, 0, 80, 0)"
    //         >
    //           12%
    //         </text>
    //       </svg>
    //       <div className="text">Динамика оборачиваемости</div>
    //     </div>
    //     <div className="box blue">
    //       <svg
    //         className="radial-progress"
    //         data-percentage="55"
    //         viewBox="0 0 80 80"
    //       >
    //         <circle className="incomplete" cx="40" cy="40" r="35"></circle>
    //         <circle
    //           className="complete"
    //           cx="40"
    //           cy="40"
    //           r="35"
    //           style="stroke-dashoffset: 39.58406743523136;"
    //         ></circle>
    //         <text
    //           className="percentage"
    //           x="50%"
    //           y="57%"
    //           transform="matrix(0, 1, -1, 0, 80, 0)"
    //         >
    //           55%
    //         </text>
    //       </svg>
    //       <div className="text">Еженедельная динамика и анализ продаж</div>
    //     </div>
    //     <div className="box purple">
    //       <svg
    //         className="radial-progress"
    //         data-percentage="67"
    //         viewBox="0 0 80 80"
    //       >
    //         <circle className="incomplete" cx="40" cy="40" r="35"></circle>
    //         <circle
    //           className="complete"
    //           cx="40"
    //           cy="40"
    //           r="35"
    //           style="stroke-dashoffset: 39.58406743523136;"
    //         ></circle>
    //         <text
    //           className="percentage"
    //           x="50%"
    //           y="57%"
    //           transform="matrix(0, 1, -1, 0, 80, 0)"
    //         >
    //           67%
    //         </text>
    //       </svg>
    //       <div className="text">Продажи</div>
    //     </div>
    //     <div className="box purple">
    //       <svg
    //         className="radial-progress"
    //         data-percentage="0"
    //         viewBox="0 0 80 80"
    //       >
    //         <circle className="incomplete" cx="40" cy="40" r="35"></circle>
    //         <circle
    //           className="complete"
    //           cx="40"
    //           cy="40"
    //           r="35"
    //           style="stroke-dashoffset: 39.58406743523136;"
    //         ></circle>
    //         <text
    //           className="percentage"
    //           x="50%"
    //           y="57%"
    //           transform="matrix(0, 1, -1, 0, 80, 0)"
    //         >
    //           0%
    //         </text>
    //       </svg>
    //       <div className="text">Продажи</div>
    //     </div>
    //     <div className="box yellow">
    //       <svg
    //         className="radial-progress"
    //         data-percentage="100"
    //         viewBox="0 0 80 80"
    //       >
    //         <circle className="incomplete" cx="40" cy="40" r="35"></circle>
    //         <circle
    //           className="complete"
    //           cx="40"
    //           cy="40"
    //           r="35"
    //           style="stroke-dashoffset: 39.58406743523136;"
    //         ></circle>
    //         <text
    //           className="percentage"
    //           x="50%"
    //           y="57%"
    //           transform="matrix(0, 1, -1, 0, 80, 0)"
    //         >
    //           100%
    //         </text>
    //       </svg>
    //       <div className="text">Динамика оборачиваемости</div>
    //     </div>
    //     <div className="box blue">
    //       <svg
    //         className="radial-progress"
    //         data-percentage="22"
    //         viewBox="0 0 80 80"
    //       >
    //         <circle className="incomplete" cx="40" cy="40" r="35"></circle>
    //         <circle
    //           className="complete"
    //           cx="40"
    //           cy="40"
    //           r="35"
    //           style="stroke-dashoffset: 39.58406743523136;"
    //         ></circle>
    //         <text
    //           className="percentage"
    //           x="50%"
    //           y="57%"
    //           transform="matrix(0, 1, -1, 0, 80, 0)"
    //         >
    //           22%
    //         </text>
    //       </svg>
    //       <div className="text">Еженедельная динамика и анализ продаж</div>
    //     </div>
    //   </div>
    //   <div className="myChart">
    //     <div className="flex">
    //       <div className="title">Audience reach</div>
    //       <select className="ml-auto">
    //         <option value="">31/01/2020 – 06/02/2020</option>
    //         <option value="">31/01/2020 – 06/02/2020</option>
    //         <option value="">31/01/2020 – 06/02/2020</option>
    //         <option value="">31/01/2020 – 06/02/2020</option>
    //       </select>
    //       <select>
    //         <option value="">День</option>
    //         <option value="">Месяц</option>
    //         <option value="">Год</option>
    //       </select>
    //     </div>
    //     <canvas id="myChart"></canvas>
    //   </div>
    //   <div className="table">
    //     <table>
    //       <tr>
    //         <th>Id</th>
    //         <th>Наименоване</th>
    //         <th>Количество</th>
    //         <th>Ст. товара</th>
    //         <th>Ст. заказа</th>
    //         <th>Покупател</th>
    //         <th>Телефон</th>
    //         <th>Регион</th>
    //         <th>Тип / способ оплаты</th>
    //         <th>Статус оплаты</th>
    //         <th>Статус доставки</th>
    //         <th>Действия</th>
    //       </tr>
    //       <tr>
    //         <td>45512222</td>
    //         <td>Детские...</td>
    //         <td>25</td>
    //         <td>20$</td>
    //         <td>200$</td>
    //         <td>Mironsh..</td>
    //         <td>99 739 35 38</td>
    //         <td>Samarkand</td>
    //         <td>Ташкент</td>
    //         <td>Терминал</td>
    //         <td>Оплачен</td>
    //         <td>Перейти в чат</td>
    //       </tr>
    //     </table>
    //   </div>
    //   <div className="total__products">
    //     <select className="counter">
    //       <option value="">10</option>
    //       <option value="">50</option>
    //       <option value="">80</option>
    //     </select>
    //     <div className="increment">
    //       <svg
    //         width="8"
    //         height="13"
    //         viewBox="0 0 8 13"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           d="M6.125 12.1875L1.25 6.5L6.125 0.8125"
    //           stroke="#999999"
    //           stroke-width="2"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //         ></path>
    //       </svg>
    //     </div>
    //     <input className="counter" type="number" placeholder="1" />
    //   </div>
    // </div>
    <h3 style={{ marginLeft: "30px" }}>Hozirgi vaqtda analytica topilmadi!</h3>
  );
};

export default ProductBlockingOfGoods;
