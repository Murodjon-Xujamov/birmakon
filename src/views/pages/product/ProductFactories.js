import React, { useEffect, useState } from "react";
import "../../../assets/scss/card.scss";
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../redux/action/Product/CreateNewProductAction";
import LoadingForCreateProduct from "../../elements/loadingForCreateProduct";
import { brands } from "../../../redux/action/Product/ProductBrandsAction";

const ProductFactories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(brands());
  }, []);

  const [value, setValue] = useState([]);
  const [counterTwo, setCounterTwo] = useState(0);
  const [counterThree, setCounterThree] = useState(0);
  const [counter, setCounter] = useState(0);

  const { brandsList } = useSelector((state) => state.brands);
  const convertBase64 = (file, element) => {
    const fileReader = new FileReader();

    fileReader.addEventListener("load", function (e) {
      element.src = e.target.result;
    });

    fileReader.readAsDataURL(file);
  };

  const categoryItem = useSelector(
    (state) => state.categoryProduct.productCategory
  );

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    setCounter((count) => count - 1);
    if (counter === 0) {
      setCounter(0);
    }
  };

  const incrementTwo = () => {
    setCounterTwo((counterTwo) => counterTwo + 1);
  };

  const decrementTwo = () => {
    setCounterTwo((counterTwo) => counterTwo - 1);
    if (counterTwo === 0) {
      setCounterTwo(0);
    }
  };

  const incrementThree = () => {
    setCounterThree((counterThree) => counterThree + 1);
  };

  const decrementThree = () => {
    setCounterThree((counterThree) => counterThree - 1);
    if (counterThree === 0) {
      setCounterThree(0);
    }
  };

  //apilarni yigish uchun hooklar
  const [name_ru, setName] = useState("");
  const [description_ru, setDescription] = useState("");
  // const [composition_uz, setComposition] = useState("");
  // const [recommendation_uz, setRecommendation] = useState("");
  const [credit_label, setCreditLabel] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [price_old, setPriceOld] = useState("");
  const [brand_id, setBrandId] = useState("");
  const [category_id, setCategoryId] = useState("");
  const [filter, setFilter] = useState("");
  const [properties_data, setPropertiesData] = useState("");
  const [photo, setPhoto] = useState("");
  const [stock_id, setStockId] = useState("");

  console.log(photo);

  const label = { inputProps: { "aria-label": "Switch demo" } };
  const { loading } = useSelector((state) => state.newProduct);
  return (
    <div className="wrapper">
      <div className="factory-card">
        <div className="grid grid-3 asad_grid">
          <div className="grid-item">
            <div className="select">
              <div className="bold color">Наименование</div>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name_ru}
                type="text"
                placeholder="Наименование"
              />
            </div>
            <div className="currency">
              <label>Валюта</label>
              <select id="input-style">
                <option value="">UZS</option>
                <option value="">RUB</option>
                <option value="">USD</option>
              </select>
            </div>
            <div className="price">
              <input
                className="price-input"
                type="number"
                id="input-style"
                placeholder="Цена за"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
              <div className="counter">
                <button onClick={decrease} id="minus">
                  -
                </button>
                <input
                  id="counter-text"
                  type="number"
                  value={counter}
                  placeholder="1 шт"
                />
                <button onClick={increase} id="plus">
                  +
                </button>
              </div>
            </div>
            <div className="inputs">
              <div className="active-cart">
                <Switch
                  {...label}
                  defaultChecked
                  style={{ color: "#EE4927" }}
                />
              </div>
              <input
                className="circle-actived"
                id="input-style"
                type="number"
                placeholder="Цена со скидкой"
              />
            </div>
            <div className="input">
              <div className="bold color">Количество</div>
              <input
                className="w-100"
                id="input-style"
                type="number"
                placeholder="Количество"
              />
            </div>
          </div>
          <div className="grid-item">
            <div className="select">
              <div className="select__title bold color">Категория</div>
              <select onChange={(e) => setCategoryId(e.target.value)}>
                {categoryItem.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
            <div className="currency">
              <label>Валюта</label>
              <select id="input-style">
                <option value="">UZS</option>
                <option value="">RUB</option>
                <option value="">USD</option>
              </select>
            </div>
            <div className="price">
              <input
                className="price-input"
                type="number"
                id="input-style"
                placeholder="Цена за"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
              <div className="counter">
                <button onClick={decrementTwo} id="minus">
                  -
                </button>
                <input
                  id="counter-text"
                  type="number"
                  value={counterTwo}
                  placeholder="1 шт"
                />
                <button onClick={incrementTwo} id="plus">
                  +
                </button>
              </div>
            </div>
            <div className="inputs">
              <div className="active-cart">
                <Switch
                  {...label}
                  defaultChecked
                  style={{ color: "#EE4927" }}
                />
              </div>
              <input
                className="circle-actived"
                id="input-style"
                type="number"
                placeholder="Цена со скидкой"
                disabled
              />
            </div>
            <div className="input">
              <div className="bold color">Габариты</div>
              <div className="inputs">
                <input
                  className="w-100"
                  id="input-style"
                  type="text"
                  placeholder="Габариты"
                />
                <input
                  className="w-100"
                  id="input-style"
                  type="text"
                  placeholder="Вес"
                />
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="select">
              <div className="select__title bold color">Ед изменения</div>
              <select>
                <option value="">Ед изменения</option>
                <option value="">Ед изменения</option>
                <option value="">Ед изменения</option>
              </select>
            </div>
            <div className="currency">
              <label>Валюта</label>
              <select id="input-style">
                <option value="">UZS</option>
                <option value="">RUB</option>
                <option value="">USD</option>
              </select>
            </div>
            <div className="price">
              <input
                className="price-input"
                type="number"
                id="input-style"
                placeholder="Цена за"
              />
              <div className="counter">
                <button onClick={decrementThree} id="minus">
                  -
                </button>
                <input
                  id="counter-text"
                  type="number"
                  value={counterThree}
                  placeholder="1 шт"
                />
                <button onClick={incrementThree} id="plus">
                  +
                </button>
              </div>
            </div>
            <div className="inputs">
              <div className="active-cart">
                <Switch
                  {...label}
                  defaultChecked
                  style={{ color: "#EE4927" }}
                />
              </div>
              <input
                className="circle-actived"
                id="input-style"
                type="number"
                placeholder="Цена со скидкой"
                disabled
              />
            </div>
            <div className="input">
              <div className="bold color">Бренд</div>
              <select
                onChange={(e) => setBrandId(e.target.value)}
                className="w-100 brand-select"
                id="input-style"
              >
                {brandsList.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid-item full">
            <div className="bold color">Описание</div>
            <textarea
              className="w-100"
              id="input-style"
              placeholder="Описание"
              onChange={(e) => setDescription(e.target.value)}
              value={description_ru}
            ></textarea>
          </div>
        </div>
        <div id="demos" className="add-photo">
          <div
            id="addPhoto"
            className="photo"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="img-input">
              <div className="bold color">Добавить AR</div>
              <div className="ar__box">AR</div>
              <label for="file-input" className="photo__label">
                +
              </label>
              <input
                multiple
                name="Ads[imageFiles][]"
                onchange="loadImage(event)"
                type="file"
                id="file-input"
                className="photo__input"
                onChange={(e) => {
                  convertBase64(
                    e.target.files[0],
                    document.querySelectorAll("#img_file")[0]
                  );
                  setValue(e.target.files[0]);
                  setPhoto(e.target.files[0]);
                }}
              />
            </div>
            <img src="" id="img_file" alt="not found" />
          </div>
        </div>
        <div className="character">
          <div className="character__title">Характеристики</div>
          <div className="character__inputs">
            <div className="input">
              <div className="character-name">
                <input
                  className="bold color"
                  type="text"
                  readonly
                  disabled
                  placeholder="Название характеристики"
                />
                <button>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.99381 14.4222L12.7248 6.67803L9.05271 2.9997L1.32176 10.7439C1.21532 10.8506 1.13972 10.9842 1.10296 11.1305L0.246094 15.4997L4.60697 14.6414C4.75339 14.6047 4.88733 14.5289 4.99381 14.4222ZM15.2205 4.17803C15.5324 3.86548 15.7076 3.44164 15.7076 2.9997C15.7076 2.55776 15.5324 2.13391 15.2205 1.82136L13.9011 0.499696C13.5891 0.187244 13.166 0.0117188 12.7248 0.0117188C12.2836 0.0117188 11.8605 0.187244 11.5484 0.499696L10.229 1.82136L13.9011 5.4997L15.2205 4.17803Z"
                      fill="#EE4927"
                    />
                  </svg>
                </button>
              </div>
              <div className="characters">
                <input id="input-style" type="text" />
                <button
                  id="input-style"
                  style={{ marginLeft: "30px" }}
                  type="button"
                >
                  Добавить
                </button>
              </div>
              <div className="character-list"></div>
            </div>
            <div id="inputs">
              <div className="input">
                <div className="bold color">Цвет</div>
                <div className="add__button">
                  <select className="select-option" id="input-style">
                    <option value="Белый">Белый</option>
                    <option value="Чёрный">Чёрный</option>
                    <option value="Красный">Красный</option>
                  </select>
                  <button id="input-style" type="submit">
                    Фото
                  </button>
                  <button className="add-color" id="input-style" type="submit">
                    Добавить
                  </button>
                </div>
              </div>
              <div className="select-list input"></div>
            </div>
          </div>
          <div className="save__block">
            <button
              onClick={() =>
                dispatch(
                  addProduct({
                    name_ru,
                    description_ru,
                    filter,
                    price,
                    price_old,
                    credit_label,
                    discount,
                    brand_id,
                    category_id,
                    properties_data,
                    photo,
                    stock_id,
                  })
                )
              }
              className="save"
              type="submit"
            >
              {loading ? <LoadingForCreateProduct /> : "Сохранить"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFactories;
