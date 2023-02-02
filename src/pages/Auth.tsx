import { useNavigate } from "react-router-dom";
import {
  useForm,
  SubmitHandler,
  useFormState,
  Controller,
} from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "../styles/auth.scss";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../store";
import {
  loginValidation,
  passwordValidation,
} from "../components/Validation/Validation";
import { useState } from "react";
import logo from "../img/logo.png";

interface ISignInForm {
  login: string;
  password: string;
}

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatch>();

  const [active, setActive] = useState(false);

  const { handleSubmit, control } = useForm<ISignInForm>();
  const { errors } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<ISignInForm> = async (data) => {
    try {
      await dispatch.auth.authLoad(data);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  const isLoading = useSelector(
    (state: RootState) => state.loading.models.auth
  );

  return (
    <div className="register-container">
      <img style={{ width: "200px", objectFit: "contain" }} src={logo} alt="" />
      <form onSubmit={handleSubmit(onSubmit)} className="input-register">
        <div className="validation">
          <Controller
            control={control}
            name="login"
            rules={loginValidation}
            render={({ field }) => (
              <input
                onChange={(e) => field.onChange(e)}
                value={field.value}
                className="auth-form__input"
              />
            )}
          />
          {errors.login?.message}
        </div>
        <div className="input-icon">
          <div className="validation">
            <Controller
              control={control}
              rules={passwordValidation}
              name="password"
              render={({ field }) => (
                <input
                  onChange={(e) => field.onChange(e)}
                  value={field.value}
                  type={active ? "text" : "password"}
                  className="auth-form__input"
                />
              )}
            />
            {errors.password?.message}
          </div>
          <p>
            {active ? (
              <FaRegEyeSlash onClick={() => setActive(false)} />
            ) : (
              <FaRegEye size={18} onClick={() => setActive(true)} />
            )}
          </p>
        </div>
        <span>Forgot password ?</span>
        <button type="submit">{isLoading ? "Loading..." : "Войти"}</button>
      </form>
    </div>
  );
};

export default Auth;
