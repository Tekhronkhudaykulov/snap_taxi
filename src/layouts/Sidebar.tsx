import { Link, useNavigate } from "react-router-dom";
import "../styles/layouts/sidebar.scss";
import logo from "../img/logo.png";
import SimpleAccordion from "../components/Accordion/Accordion";

export default function Sidebar({}) {
  const navigate = useNavigate();

  const exitFunction = () => {
    localStorage.clear();
    navigate("/auth");
  };

  return (
    <aside className="sidebar">
      <Link to="/" className="sidebar__logo">
        <img src={logo} alt="" />
      </Link>
      <ul className="menu">
        <li className="menu__item">
          <Link to="/applications" className="menu__link">
            <i className="isax-message-add-1"></i>
            Заявки
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/drivers" className="menu__link">
            <i className="isax-car"></i>
            Водитель
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/clients" className="menu__link">
            <i className="isax-people"></i>
            Клиенты
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/" className="menu__link">
            <i className="isax-picture-frame"></i>
            Карта
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/reviews" className="menu__link">
            <i className="isax-message"></i>
            Отзывы
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/tariffs" className="menu__link">
            <i className="isax-receipt-search"></i>
            Расценки
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/tarifs" className="menu__link">
            <i className="isax-receipt-search"></i>
            Тарифы
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/add-driver" className="menu__link">
            <i className="isax-user-cirlce-add"></i>
            Регистрация водтелей
          </Link>
        </li>
        <li className="menu__item">
          <i
            style={{ fontSize: "20px", color: "#9d9e9e" }}
            className="isax-user-cirlce-add"
          ></i>
          <SimpleAccordion />
        </li>
        <li className="menu__item">
          <a onClick={exitFunction} href="" className="menu__link">
            <i className="isax-logout"></i>
            Выйти
          </a>
        </li>
      </ul>
    </aside>
  );
}
