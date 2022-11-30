import { useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import "../styles/auth.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../store";

const Auth = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch<Dispatch>();

  const authFunction = async () => {
    try {
      await dispatch.auth.authLoad({ login, password });
      navigate("/");
    } catch (e) {
      navigate("/auth");
      alert("Error");
    }
  };

  const isLoading = useSelector(
    (state: RootState) => state.loading.effects.auth.authLoad
  );

  return (
    <div>
      <div className="register-container">
        <p className="hamd">SNAP TAXI</p>
        <div className="input-register">
          <input
            onChange={(e) => setLogin(e.target.value)}
            type="text"
            placeholder="Ведите логин"
          />
          <div className="input-icon">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="Ведите пароль"
            />
            <p>
              <FaRegEye size={18} />
            </p>
          </div>

          <span>Forgot password ?</span>
          <button onClick={authFunction}>
            {isLoading ? "Loading..." : "Войти"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
