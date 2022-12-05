import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DriverInfo from "../components/DriverInfo/DriverInfo";
import Pagination from "../components/Pagination/Pagination";
import TableRowForTarifs from "../components/Table/TableForTarifs/TableRowForTarifs";
import Title from "../components/Title/Title";
import { Dispatch, RootState } from "../store";

const Tarifs = () => {
  const [isDriverInfoShow, setIsDriverInfoShow] = useState(false);

  return (
    <main className="page page__drivers">
      <section className="flex justify-between">
        <Title title={"Тарифы"} titleAll="437" />
        <Link className="btn" to="/add-driver">
          Добавить тарифы +
        </Link>
      </section>
      <TableRowForTarifs />
      <Pagination showed={8} all="437" />
      {isDriverInfoShow ? (
        <DriverInfo name={"Пахомов Рустам"} earning="7856000" />
      ) : null}
    </main>
  );
};

export default Tarifs;
