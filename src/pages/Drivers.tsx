import { useState } from "react";
import { Link } from "react-router-dom";

import Title from "../components/Title/Title";
import Pagination from "../components/Pagination/Pagination";

import DriverInfo from "../components/DriverInfo/DriverInfo";
import TableRow from "../components/Table/TableRow";
import TableRowItems from "../components/Table/TableRow";
import TableRowForDrivers from "../components/Table/TableForDrivers/TableRowForDrivers";

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
      <TableRowForDrivers />
      <Pagination showed={8} all="437" />
      {isDriverInfoShow ? (
        <DriverInfo name={"Пахомов Рустам"} earning="7856000" />
      ) : null}
    </main>
  );
}
