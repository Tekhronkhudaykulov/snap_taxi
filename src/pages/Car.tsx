import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClientInfo from "../components/ClientInfo/ClientInfo";
import ModalForBrand from "../components/Modal/ModalForBrand";
import Pagination from "../components/Pagination/Pagination";
import Title from "../components/Title/Title";
import { Dispatch, RootState } from "../store";
import TableRowForCar from "./component/TableRowClient";
import TableRowClient from "./component/TableRowClient";

const Car = () => {
  const [isClientInfoShow, setisClientInfoShow] = useState(false);

  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.Directory.getBrands();
  }, []);

  const { brand } = useSelector((state: RootState) => state.Directory);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <main className="page page__clients">
      {show && (
        <ModalForBrand
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
        />
      )}

      <section className="flex justify-between">
        <Title title="Бренд" titleAll="" />
        <button className="btn" onClick={handleShow} type="button">
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
            {brand.map((item, index) => (
              <div key={index}>
                <TableRowForCar brand={item} />
              </div>
            ))}
          </article>
        </section>
      </div>
      <Pagination showed={8} all="437" />
      {isClientInfoShow ? <ClientInfo name="Абдулаев Рустам" /> : null}
    </main>
  );
};

export default Car;
