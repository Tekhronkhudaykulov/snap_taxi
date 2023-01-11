import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClientInfo from "../components/ClientInfo/ClientInfo";
import ModalForEditType from "../components/Modal/ModalForEditType";
import ModalForType from "../components/Modal/ModalForType";
import Pagination from "../components/Pagination/Pagination";
import Title from "../components/Title/Title";
import { Dispatch, RootState } from "../store";
import TableRowForType from "./component/TableRowForType";

const Type = () => {
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.Directory.getTypes();
  }, []);

  const { type } = useSelector((state: RootState) => state.Directory);

  const [isClientInfoShow, setisClientInfoShow] = useState(false);

  const { show } = useSelector((state: RootState) => state.other);

  const { showForType } = useSelector((state: RootState) => state.other);

  const { typeById } = useSelector((state: RootState) => state.Directory);

  return (
    <>
      {show && <ModalForType show={show} />}
      {showForType && (
        <ModalForEditType typeById={typeById} show={showForType} />
      )}

      <main className="page page__clients">
        <section className="flex justify-between">
          <Title title="Типы" titleAll={type.length} />
          <button
            className="btn"
            onClick={() => dispatch.other.setShow(true)}
            type="button"
          >
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
