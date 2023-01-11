import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClientInfo from "../components/ClientInfo/ClientInfo";
import ModalForBrand from "../components/Modal/ModalForBrand";
import ModalForEditBrand from "../components/Modal/ModalForEditBrand";
import Pagination from "../components/Pagination/Pagination";
import Title from "../components/Title/Title";
import { Dispatch, RootState } from "../store";
import TableRowForCar from "./component/TableRowClient";

const Car = () => {
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.Directory.getBrands();
  }, []);

  const { brand } = useSelector((state: RootState) => state.Directory);

  const isLoading = useSelector(
    (state: RootState) => state.loading.effects.Directory.getBrands
  );

  const { show } = useSelector((state: RootState) => state.other);

  const { showForBrand } = useSelector((state: RootState) => state.other);
  return (
    <main className="page page__clients">
      {show && <ModalForBrand show={show} />}
      {showForBrand && <ModalForEditBrand show={showForBrand} />}

      <section className="flex justify-between">
        <Title title="Бренд" titleAll="" />
        <button
          className="btn"
          onClick={() => dispatch.other.setShow(true)}
          type="button"
        >
          Добавить бренд +
        </button>
      </section>
      <div className="table-out">
        <section className="table">
          <article className="thead">
            <div className="trow text-gray-500 font-normal">
              <div className="th">Id</div>
              <div className="th">Name</div>
            </div>
          </article>
          <article className="tbody">
            {brand?.map((item, index) => (
              <div key={index}>
                <TableRowForCar brand={item} index={index} />
              </div>
            ))}
          </article>
        </section>
      </div>
      <Pagination showed={8} all="437" />
    </main>
  );
};

export default Car;
