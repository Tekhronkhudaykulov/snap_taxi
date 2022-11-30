import { useState } from "react";
import { Link } from "react-router-dom";

import Title from "../components/Title/Title";
import Pagination from "../components/Pagination/Pagination";

import DriverInfo from "../components/DriverInfo/DriverInfo";
import TableRow from "../components/Table/TableRow";

export default function Drivers({}) {
  const [isDriverInfoShow, setIsDriverInfoShow] = useState(false);

  return (
    <main className="page page__drivers">
      <section className="flex">
        <Title title={"Водители"} titleAll="437" />
        <Link className="btn" to="/add-driver">
          Добавить водителя +
        </Link>
      </section>
      <div className="table-out">
        <section className="table">
          <article className="thead">
            <div className="trow text-gray-500 font-normal">
              <div className="th">ID заказа</div>
              <div className="th">Адрес клиента</div>
              <div className="th">Клиент</div>
              <div className="th">Телефон клиента</div>
              <div className="th">Тариф</div>
              <div className="th">Водитель</div>
              <div className="th">Марка и номер машины</div>
              <div className="th">Цвет авто</div>
              <div className="th">Телефон водителя</div>
              <div className="th">Статус</div>
              <div className="th">Дистанция</div>
              <div className="th">Стоимость</div>
            </div>
          </article>
          <article className="tbody">
            <TableRow status="status" />
            <TableRow status="status" />
            <TableRow status="status" />
            <TableRow status="status" />
          </article>
        </section>
      </div>
      <Pagination showed={8} all="437" />
      {isDriverInfoShow ? (
        <DriverInfo name={"Пахомов Рустам"} earning="7856000" />
      ) : null}
    </main>
  );
}
