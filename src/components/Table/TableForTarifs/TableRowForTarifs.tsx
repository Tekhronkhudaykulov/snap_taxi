import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../../store";
import DriverInfo from "../../DriverInfo/DriverInfo";
import TableRowItemsForTarifs from "./TableRow";

const TableRowForTarifs = () => {
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.RateModel.getRatesLoad();
  }, []);

  const allRates = useSelector((state: RootState) => state.RateModel.Rates);
  const isLoading = useSelector(
    (state: RootState) => state.loading.models.RateModel
  );

  const [isDriverInfoShow, setIsDriverInfoShow] = useState(false);

  return (
    <main className="page page__drivers">
      <div className="table-out">
        <section className="table">
          <article className="thead">
            <div className="trow text-gray-500 font-normal">
              <div className="th">Id</div>
              <div className="th">Title</div>
              <div className="th">MinPrice</div>
              <div className="th">PricePerKm</div>
              <div className="th">PricePerMin</div>
              <div className="th">Commission</div>
              <div className="th">CreatedAt</div>
              <div className="th">UpdatedAt</div>
            </div>
          </article>
          {allRates?.map((item, index) => (
            <article className="tbody mb-1.5">
              <TableRowItemsForTarifs
                isLoading={isLoading}
                index={index}
                Rates={item}
                status="status"
              />
            </article>
          ))}
        </section>
      </div>
      {isDriverInfoShow ? (
        <DriverInfo name={"Пахомов Рустам"} earning="7856000" />
      ) : null}
    </main>
  );
};

export default TableRowForTarifs;
