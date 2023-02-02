import { useState } from "react";
import { Orders } from "../../../store/orders/types";
import RejectApplication from "../../RejectApplication/RejectApplication";

interface TableRowTtype {
  status: string;
  orders: Orders;
}
export default function TableRowItemsOrders({ status, orders }: TableRowTtype) {
  const [isRejectAppShow, setIsRejectAppShow] = useState(false);

  return (
    <div className={`trow ${status}`}>
      <div className="td ">19935</div>
      <div className="td">
        г.Ташкент
        <span className="subtext">Юнусабад 18, дом 6</span>
      </div>
      <div className="td">
        Камила
        <span className="subtext">ID276</span>
      </div>
      <div className="td">99 888 77 55</div>
      <div className="td">Премиум</div>
      <div className="td">
        Рустам
        <span className="subtext">ID276</span>
      </div>
      <div className="td">
        Chevrolet Cobalt
        <span className="subtext">W494XA</span>
      </div>
      <div className="td">Черный</div>
      <div className="td">99 888 77 55</div>
      <div className="td">На месте</div>
      <div className="td">3.14 КМ</div>
      <div className="td">17 430 сум</div>
      {isRejectAppShow ? <RejectApplication id={19935} /> : null}
    </div>
  );
}
