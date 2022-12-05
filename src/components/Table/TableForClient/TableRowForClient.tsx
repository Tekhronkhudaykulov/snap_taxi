import TableRowItemsClient from "./TableRow";

const TableRowForClient = () => {
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
          <TableRowItemsClient />
          <TableRowItemsClient />
          <TableRowItemsClient />
          <TableRowItemsClient />
        </article>
      </section>
    </div>
  );
};

export default TableRowForClient;
