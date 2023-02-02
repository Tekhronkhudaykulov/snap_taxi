import { Link } from "react-router-dom";

import "./ClientInfo.scss";

import driverImg from "../../img/client.png";

interface ClientInfoType {
  name: string;
}

export default function ClientInfo({ name }: ClientInfoType) {
  return (
    <article className="client-info">
      <img className="client-info__img" src={driverImg} alt="" />
      <p className="client-info__name mb-4">{name}</p>
      <Link className="client-info__history block mb-3" to="">
        Смотреть историю поездок
      </Link>
      <Link className="client-info__reviews" to="">
        Смотреть отзывы
      </Link>
      <Link className="client-info__block btn-light mt-10" to="">
        Заблокировать
      </Link>
    </article>
  );
}
