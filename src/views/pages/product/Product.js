import React, { useEffect, useState } from "react";
import CardImageComponent from "./CardImageComponent";
import "../../../assets/scss/carts.scss";
import { product } from "../../../redux/action/Product/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingAll from "../../elements/loadingAll";
import {
  productLock,
  productOnLock,
} from "../../../redux/action/Product/ProductLockAction";

const Product = () => {
  const [filter, setFilter] = useState({
    brand_id: "",
    category_id: "",
    shop_id: "",
    status: "",
    stock_id: "",
  });
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.product.productList);
  const categoryProducts = useSelector(
    (state) => state.categoryProduct.productCategory
  );

  const { loading } = useSelector((state) => state.categoryProduct);

  useEffect(() => {
    dispatch(product(filter));
  }, []);

  return (
    <div className="wrapper">
      <div className="flexs">
        <div className="title" style={{ fontWeight: "bold", fontSize: "40px" }}>
          Карточки товаров
        </div>
        <Link to="product/factories">
          <button className="table__cart" type="submit">
            Добавить товар
          </button>
        </Link>

        {/* <button className="table__cart" type="submit">
          Добавить товары таблицей
        </button> */}
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor , Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor
      </p>
      <div className="flexs">
        <form className="search">
          <input type="search" placeholder="Поиск по товаром" />
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.3248 12.8987L19.7048 18.2787C19.8939 18.468 20 18.7246 20 18.9921C19.9999 19.2596 19.8935 19.5161 19.7043 19.7052C19.515 19.8943 19.2584 20.0005 18.9909 20.0004C18.7234 20.0003 18.4669 19.894 18.2778 19.7047L12.8978 14.3247C11.2895 15.5704 9.26705 16.1566 7.24189 15.9641C5.21674 15.7716 3.341 14.8148 1.99625 13.2884C0.6515 11.7619 -0.0612416 9.78056 0.00301976 7.74729C0.0672812 5.71402 0.903718 3.7816 2.34217 2.34315C3.78063 0.904695 5.71305 0.0682577 7.74631 0.00399633C9.77958 -0.0602651 11.761 0.652477 13.2874 1.99723C14.8138 3.34198 15.7706 5.21772 15.9631 7.24287C16.1556 9.26802 15.5694 11.2905 14.3238 12.8987H14.3248ZM7.99977 13.9997C9.59107 13.9997 11.1172 13.3676 12.2424 12.2424C13.3676 11.1172 13.9998 9.59104 13.9998 7.99974C13.9998 6.40845 13.3676 4.88232 12.2424 3.7571C11.1172 2.63189 9.59107 1.99974 7.99977 1.99974C6.40847 1.99974 4.88235 2.63189 3.75713 3.7571C2.63191 4.88232 1.99977 6.40845 1.99977 7.99974C1.99977 9.59104 2.63191 11.1172 3.75713 12.2424C4.88235 13.3676 6.40847 13.9997 7.99977 13.9997Z"
              fill="#999999"
            ></path>
          </svg>
        </form>
        <select
          className="select"
          onChange={(e) => {
            let newFilter = {
              ...filter,
              category_id: e.target.value,
            };

            dispatch(product(newFilter));
            setFilter({ category_id: e.target.value });
          }}
        >
          {categoryProducts.map((item, idx) => (
            // <option value="all"> Все товары</option>
            <>
              <option value={item.id} key={idx}>
                {item.name}
              </option>
            </>
          ))}
        </select>
      </div>
      <div className="grid grid-4">
        {loading ? (
          <LoadingAll />
        ) : (
          <CardImageComponent
            product={productList}
            onClickLock={(id, boolenLock) => {
              if (boolenLock.lock) {
                dispatch(productLock({ product_id: id }));
              } else {
                dispatch(productOnLock({ product_id: id }));
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Product;
