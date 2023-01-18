import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClientInfo from "../components/ClientInfo/ClientInfo";
import ModalForColors from "../components/Modal/ModalForColors";
import ModalForEditColor from "../components/Modal/ModalForEditColor";
import Pagination from "../components/Pagination/Pagination";
import Title from "../components/Title/Title";
import { Dispatch, RootState } from "../store";
import { Color } from "../store/directory/types";
import TableRowClient from "./component/TableRowClient";
import TableRowForColor from "./component/TableRowForColor";

const ColorPage = () => {
  const [isClientInfoShow, setisClientInfoShow] = useState(false);

  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.Directory.getColors();
  }, []);

  const { colorList } = useSelector((state: RootState) => state.Directory);

  const isLoading = useSelector(
    (state: RootState) => state.loading.effects.Directory.getColors
  );

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const { showColor } = useSelector((state: RootState) => state.other);
  return (
    <>
      {show && (
        <ModalForColors handleClose={handleClose} show={show} title="Color" />
      )}
      {showColor && <ModalForEditColor show={showColor} title="Color" />}

      <main className="page page__clients">
        <section className="flex justify-between">
          <Title title="Color" titleAll="" />
          <button className="btn" onClick={handleShow} type="button">
            Добавить color +
          </button>
        </section>
        <div className="table-out">
          <section className="table">
            <article className="thead">
              <div className="trow text-gray-500 font-normal">
                <div className="th">Id</div>
                <div className="th">Name</div>
                <div className="th">Code</div>
              </div>
            </article>
            <article className="tbody">
              {colorList.map((item: Color, index) => (
                <div key={index}>
                  <TableRowForColor
                    isLoading={isLoading}
                    color={item}
                    index={index}
                  />
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

export default ColorPage;
