import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../assets/scss/productCreate.scss";
import { orders } from "../../../redux/action/Orders/OrdersAction";
import ProductCreateStatus from "./ProductCreateStatus";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  deleteOrderId,
  checkOrder,
  declineOrder,
} from "../../../redux/action/Orders/OrdersAction";
import { Link } from "react-router-dom";

const ProductCreate = () => {
  const [filter, setFilter] = useState({
    status: "",
  });
  const [activeButton, setActiveButton] = useState("button1");

  const dispatch = useDispatch();

  const ordersAll = useSelector((state) => state.orders.ordersList);

  useEffect(() => {
    dispatch(orders(filter));
  }, []);

  return (
    <div className="wrapper">
      <div className="asad_wrap">
        <div className="mybox">
          <div className="title">Заказы</div>
          <div className="tabs order-tab">
            <div className="tab active">По товарам</div>
          </div>
        </div>
        <ProductCreateStatus
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          onClickFilter={(status) => {
            let newFilter = {
              ...filter,
              status,
            };
            setFilter(newFilter);
            dispatch(orders(newFilter));
          }}
        />
      </div>
      <div>
        {ordersAll.map((item) => (
          <div className="all-orders-status">
            <div className="buyer">
              <div className="buyer__name">
                {item.name == null ? "Anonim" : item.name}
              </div>
              <div className="buyer__region">Адресс :{item.address}</div>
            </div>
            <div className="close-icon">
              <AiOutlineCloseCircle
                onClick={() => dispatch(deleteOrderId({ id: item.id }))}
                size={30}
              />
            </div>
            <div className="order-carts">
              <div className="order-cart">
                <div className="order__description">
                  <div className="order__title">
                    {item.orderProducts.map((item) => (
                      <p>{item.product?.category_full}</p>
                    ))}
                  </div>
                  <div className="order__id">
                    Id заказа: <span>{item.id}#</span>
                  </div>
                </div>
                <div className="order__description">
                  <div className="order">
                    Количество: <span>{item.amount}шт</span>
                  </div>
                  <div className="status__order">
                    Статус доставки: <span>{item.delivery.name}</span>
                  </div>
                  <div className="status__payment">
                    Статус оплаты: <span>{item.payment.name}</span>
                  </div>
                </div>
                <div className="order__description text-right">
                  {item.orderProducts.map((item) => (
                    <div className="price">{item.price} sum</div>
                  ))}
                  <div className="call" style={{ marginTop: "10px" }}>
                    {item.phone}
                  </div>
                </div>
              </div>
            </div>
            <div className="total">
              <div className="total-p">
                Общая сумма: <span>{item.price} sum</span>
              </div>
              <div className="status-create">
                <Link to="/product/create">
                  <button onClick={() => dispatch(checkOrder({ id: item.id }))}>
                    Принять заказ
                  </button>
                </Link>
                <button onClick={() => dispatch(declineOrder({ id: item.id }))}>
                  Отменить
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCreate;
