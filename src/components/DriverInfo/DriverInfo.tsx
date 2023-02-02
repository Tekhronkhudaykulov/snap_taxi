import { Link } from "react-router-dom";

import "./DriverInfo.scss";

import driverImg from "../../img/driver.png";

interface DriverInfoType {
  name: string;
  earning: string;
}
export default function DriverInfo({ name, earning }: DriverInfoType) {
  return (
    <article className="driver-info">
      <img className="driver-info__img" src={driverImg} alt="" />
      <p className="driver-info__name">{name}</p>
      <div className="driver-info__earning">Заработок: {earning} сум</div>
      <Link className="driver-info__history" to="">
        Смотреть историю поездок
      </Link>
      <Link className="driver-info__change btn mb-4 mt-8" to="">
        Редактировать данные
      </Link>
      <Link className="driver-info__upbalance btn mb-4" to="">
        Пополнить баланс
      </Link>
      <Link className="driver-info__block btn-light" to="">
        Заблокировать
      </Link>
    </article>
  );
}
