import TableRowItems from "../TableRow";
import "../Table.scss";
import TableRowItemsOrders from "./TableRow";
export default function TableRowForOrders({ orders }: any) {
  return (
    <div className="table-out">
      <section className="table">
        <article className="thead">
          <div className="trow text-gray-500 font-normal">
            <div className="th">ID заказа</div>
            <div className="th">Адрес клиента</div>
            <div className="th">Клиент</div>
            <div className="th">Телефон клиента</div>
            <div className="th">Тариф</div>
            <div className="th">Водитель</div>
            <div className="th">Марка и номер машины</div>
            <div className="th">Цвет авто</div>
            <div className="th">Телефон водителя</div>
            <div className="th">Статус</div>
            <div className="th">Дистанция</div>
            <div className="th">Стоимость</div>
          </div>
        </article>
        <article className="tbody">
          {orders.map(({ item, index }: any) => (
            <div key={index}>
              <TableRowItemsOrders status="status" orders={item} />
            </div>
          ))}
        </article>
      </section>
    </div>
  );
}
