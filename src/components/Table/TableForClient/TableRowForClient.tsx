import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../../store";
import TableRowItemsClient from "./TableRow";

const TableRowForClient = () => {
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.Clients.getClient();
  }, []);

  const { client } = useSelector((state: RootState) => state.Clients);
  const isLoading = useSelector(
    (state: RootState) => state.loading.models.Clients
  );
  return (
    <div className="table-out">
      <section className="table">
        <article className="thead">
          <div className="trow text-gray-500 font-normal">
            <div className="th">Клиент</div>
            <div className="th">Ник</div>
            <div className="th">Телефон водителя</div>
            <div className="th">Дата рождения</div>
            <div className="th">Рейтинг</div>
          </div>
        </article>
        <article className="tbody">
          {client?.map((item, index) => (
            <div key={index}>
              <TableRowItemsClient
                isLoading={isLoading}
                clients={item}
                index={index}
              />
            </div>
          ))}
        </article>
      </section>
    </div>
  );
};

export default TableRowForClient;
