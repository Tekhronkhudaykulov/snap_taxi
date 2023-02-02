import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../../store";
import DriverInfo from "../../DriverInfo/DriverInfo";
import TableRowItemsDriver from "./TableRow";

const TableRowForDrivers = () => {
  const dispatch = useDispatch<Dispatch>();
  const { Modal } = useSelector((state: RootState) => state.other);

  useEffect(() => {
    dispatch.Drivers.getDriversLoad();
  }, []);

  const { driverList } = useSelector((state: RootState) => state.Drivers);
  const isLoading = useSelector(
    (state: RootState) => state.loading.models.Drivers
  );

  return (
    <div className="table-out" onClick={() => dispatch.other.setModal(true)}>
      <section className="table">
        <article className="thead">
          <div className="trow text-gray-500 font-normal">
            <div className="th">ID водителя</div>
            <div className="th">Водитель</div>
            <div className="th">Марка и номер машины</div>
            <div className="th">Телефон водителя</div>
            <div className="th">Дата рождения</div>
            <div className="th">Выполненые заказы</div>
            <div className="th">Пропущенные</div>
            <div className="th">Жалобы</div>
          </div>
        </article>
        <article className="tbody">
          {driverList.map((item, index) => (
            <div key={index}>
              <TableRowItemsDriver
                status="status"
                item={item}
                index={index}
                isLoading={isLoading}
              />
            </div>
          ))}
        </article>
      </section>
      {Modal ? <DriverInfo name={"Пахомов Рустам"} earning="7856000" /> : null}
    </div>
  );
};

export default TableRowForDrivers;
