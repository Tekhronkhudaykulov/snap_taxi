import { useEffect, useState } from "react";
import Notification from "../components/Notification/Notification";
import "../styles/layouts/header.scss";
import profileImg from "../img/profile.png";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../store";

export default function Header({}) {
  const [isNotifShow, setIsNotifShow] = useState(false);

  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.auth.getAdminInfo();
  }, []);

  const { adminInfo } = useSelector((state: RootState) => state.auth);

  return (
    <header className="header">
      <form className="header__search search-header">
        <input
          type="text"
          className="search-header__input"
          placeholder="Поиск"
        />
        <button className="search-header__submit">
          <i className="isax-search-normal-1"></i>
        </button>
      </form>
      <div className="header__actions">
        <button className="header__birthdays" type="button">
          <i className="isax-cake"></i>
          <span>2</span>
        </button>
        <div className="header__notification">
          <button type="button">
            <i className="isax-notification-bing"></i>
            <span>2</span>
          </button>
          {isNotifShow ? <Notification /> : null}
        </div>
        <div className="header__profile profile-header">
          <img src={profileImg} className="profile-header__img" alt="" />
          <span className="profile-header__position">{adminInfo?.role}</span>
          <p className="profile-header__name">{adminInfo?.fullName}</p>
        </div>
      </div>
    </header>
  );
}
