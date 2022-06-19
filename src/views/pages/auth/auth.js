import React, { useState, useEffect } from "react";
import "../../../assets/scss/auth.scss";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth } from "../../../redux/action/Auth/AuthAction";
import ButtonLoadingComponent from "../../elements/loading";

const Auth = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");

  const [password, setPassword] = useState("");

  const history = useHistory();

  const { loading, token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token !== null) {
      history.push("/dashboard");
      window.location.reload();
    }
  }, [token]);

  return (
    <div className="register-container">
      <p className="hamd">Bir Makon</p>
      <div className="input-register">
        <input
          type="text"
          placeholder="Ведите логин"
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Ведите пароль"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          style={{ backgroundColor: "#131E3D" }}
          onClick={() => dispatch(auth({ login, password }))}
        >
          {loading ? <ButtonLoadingComponent /> : "Kirish"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
