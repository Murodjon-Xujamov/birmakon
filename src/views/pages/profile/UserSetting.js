import React, { useState } from "react";
import {
  CardBlue,
  CardGray,
  CardTitle,
  CardWhite,
  GridTwo,
  Input,
} from "../../elements/_cards";
import { Link } from "react-router-dom";
import { ButtonBlue } from "../../elements/_buttons";
import "../../../assets/scss/users.scss";
import Warning from "../../../assets/img/alarm (1).png";
import { Form } from "react-bootstrap";
import { profil } from "../../../redux/action/Profil/ProfilAction";
import { useDispatch } from "react-redux";

const UserSetting = () => {
  const dispatch = useDispatch();
  const initialValue = {
    inn: "",
    account: "",
    bank: "",
    description_ru: "",
    address_legal: "",
    oked: "",
    okohx: "",
    mfo: "",
  };
  const [profile, setProfile] = useState(initialValue);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };
  return (
    <>
      <div className="wrapper asad">
        <CardWhite>
          <div className="title user__title">Настройка</div>
          <ul>
            <li className="isactive">Данный продавца</li>
            <li>
              <Link to="/user/information">Мои Данный</Link>
            </li>
          </ul>
          <CardBlue padding="20px" marginTop="20px" textCenter="start">
            <div className="_user_account_warning">
              <img src={Warning} alt="Warning" />
              <div className="_user_account_warning_card_row">
                <h4>Заполниту данный поставшика</h4>
                <p style={{ color: "white" }}>
                  Карточки загружинний без фотографии , не попадут на сайт
                </p>
              </div>
            </div>
          </CardBlue>
          <CardGray
            color="#f5f5f5"
            textAlign="start"
            padding="20px"
            marginTop="20px"
          >
            <Form>
              <GridTwo>
                <div>
                  <label>ИНН ?</label>
                  <Input
                    onChange={handleChange}
                    name="inn"
                    value={profile.inn}
                    placeholder="N: 155 000"
                  />
                </div>
                <div>
                  <label>Расчётный счёт?</label>
                  <Input
                    onChange={handleChange}
                    name="account"
                    value={profile.account}
                    placeholder="155"
                  />
                </div>
                <div>
                  <label>Наименование</label>
                  <Input
                    onChange={handleChange}
                    name="name"
                    value={profile.description_ru}
                    placeholder="Privet"
                  />
                </div>
                <div>
                  <label>Банк</label>
                  <Input
                    onChange={handleChange}
                    name="bank"
                    value={profile.bank}
                    placeholder="8600 14** **** **94"
                  />
                </div>
                <div>
                  <label>Юридический адрес?</label>
                  <Input
                    name="address_legal"
                    onChange={handleChange}
                    value={profile.address_legal}
                    placeholder="Tashkent"
                  />
                </div>
                <div>
                  <label>Окед</label>
                  <Input
                    onChange={handleChange}
                    name="oked"
                    value={profile.oked}
                    placeholder="**94"
                  />
                </div>
                <div>
                  <label>Оконх</label>
                  <Input
                    onChange={handleChange}
                    name="okohx"
                    value={profile.okohx}
                    placeholder="**%"
                  />
                </div>
                <div>
                  <label>Мфо</label>
                  <Input
                    onChange={handleChange}
                    name="mfo"
                    value={profile.mfo}
                    placeholder="Andrey F"
                  />
                </div>
              </GridTwo>
              <ButtonBlue
                onClick={() => dispatch(profil(profile))}
                type="submit"
                marginTop="20px"
              >
                Редактировать данный продавца
              </ButtonBlue>
            </Form>
          </CardGray>
        </CardWhite>
      </div>
    </>
  );
};

export default UserSetting;
