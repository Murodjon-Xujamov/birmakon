import React, { useState } from "react";
import "../../../assets/scss/settings.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PhoneInput from "react-phone-input-2";
import { renameProfile } from "../../../redux/action/Profil/RenameProfileActions";
import LoadingForCreateProduct from "../../elements/loadingForCreateProduct";

const UserInformation = () => {
  const profile = useSelector((state) => state.profileClient.profileClient);
  const regions = useSelector((state) => state.categoryRegion.region);
  const initialValue = {
    name: profile.name,
    phone: profile.phone,
    email: profile.email,
    password: "",
  };
  const { loading } = useSelector((state) => state.renameProfile);
  const dispatch = useDispatch();
  const [profileValue, setProfileValue] = useState(initialValue);
  const handlePhone = (e) => {
    setProfileValue({ ...profileValue, phone: `+${e}` });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileValue({
      ...profileValue,
      [name]: value,
    });
  };

  return (
    <div className="wrapper">
      <div className="title user__title">Мироншох Насимов</div>
      <span className="change__user">доступ к редактирование</span>
      <ul>
        <li className="isactive">Мои Данный</li>
        <li>
          <Link to="/user-setting">Данный продавца</Link>
        </li>
      </ul>
      <div className="inputs">
        <div className="input">
          <div className="input__title">Наименование организации</div>
          <input
            onChange={handleChange}
            name="name"
            value={profileValue.name}
            type="text"
          />
        </div>
        <div className="input">
          <div className="input__title">Телефон</div>
          <PhoneInput
            isValid={true}
            specialLabel={false}
            country={"uz"}
            defaultMask={"(998) ...-..-.."}
            name="phone"
            onChange={handlePhone}
            value={profileValue.phone}
          />
        </div>
        <div className="input">
          <div className="input__title">Емаил</div>
          <input
            defaultValue={initialValue.email}
            onChange={handleChange}
            name="email"
            value={profileValue.email}
            type="email"
            placeholder="mirdesign1er@gmail.com"
          />
        </div>
        <div className="input">
          <div className="input__title">Регион</div>
          <select>
            {regions.map((item, index) => (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="input">
          <div className="input__title">Адрес</div>
          <input type="text" placeholder="Махмуда тараби 23..." />
        </div>
        <div className="input">
          <div className="input__title">Контактное лицо</div>
          <input type="text" placeholder="Мироншох Насимов" />
        </div>
      </div>
      <div className="data__title">Данные для входа</div>
      <div className="input" id="input">
        <div className="input__title">Логин</div>
        <input
          defaultValue={profile.login}
          type="text"
          placeholder="Мироншох020"
        />
      </div>
      <div className="inputs">
        <div className="input">
          <div className="input__title">Старый пароль</div>
          <input type="password" />
        </div>
        <div className="input">
          <div className="input__title">Новый пароль</div>
          <input
            onChange={handleChange}
            name="password"
            value={profileValue.password}
            type="password"
          />
        </div>
        <div className="input">
          <div className="input__title">Повторите новые пароль</div>
          <input type="password" />
        </div>
      </div>
      <div className="save-block">
        <button
          onClick={() => dispatch(renameProfile(profileValue))}
          className="save"
          type="submit"
        >
          {loading ? <LoadingForCreateProduct /> : "Сохранить"}
        </button>
      </div>
    </div>
  );
};

export default UserInformation;
