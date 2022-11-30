import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClientInfo from "../components/ClientInfo/ClientInfo";
import ModalForType from "../components/Modal/ModalForType";
import Pagination from "../components/Pagination/Pagination";
import Title from "../components/Title/Title";
import { Dispatch, RootState } from "../store";
import TableRowClient from "./component/TableRowClient";
import TableRowForType from "./component/TableRowForType";

const Type = () => {
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.Directory.getTypes();
  }, []);

  const { type } = useSelector((state: RootState) => state.Directory);

  const [isClientInfoShow, setisClientInfoShow] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <>
      {show && (
        <ModalForType
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
        />
      )}

      <main className="page page__clients">
        <section className="flex justify-between">
          <Title title="Типы" titleAll="743" />
          <button className="btn" onClick={handleShow} type="button">
            Добавить тип +
          </button>
        </section>
        <div className="table-out">
          <section className="table">
            <article className="thead">
              <div className="trow text-gray-500 font-normal">
                <div className="th">Brand</div>
                <div className="th">Name</div>
              </div>
            </article>
            <article className="tbody">
              {type.map((item, index) => (
                <div key={index}>
                  <TableRowForType type={item} />
                </div>
              ))}
            </article>
          </section>
        </div>
        <Pagination showed={8} all="437" />
        {isClientInfoShow ? <ClientInfo name="Абдулаев Рустам" /> : null}
      </main>
    </>
  );
};

export default Type;
