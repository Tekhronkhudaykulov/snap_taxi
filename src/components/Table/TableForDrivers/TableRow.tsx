import { useState } from "react";
import { Driver } from "../../../store/drivers/types";
import RejectApplication from "../../RejectApplication/RejectApplication";

interface TableRowTtype {
  status: string;
  item: Driver;
  index: string;
  // orders: Orders;
}
export default function TableRowItemsDriver({
  status,
  item,
  index,
}: TableRowTtype) {
  const [isRejectAppShow, setIsRejectAppShow] = useState(false);

  return (
    <div className={`trow ${status}`}>
      <div className="td ">{index}</div>
      <div className="td">{index}</div>
      <div className="td">
        {item?.car ? item?.car?.type?.name : "Mashina kiritilmagan"}
      </div>
      <div className="td">{item?.user?.phone}</div>
      <div className="td">
        {item?.user?.birthday ? item?.user?.birthday : "Malumot yoq"}
      </div>
      <div className="td"></div>
      <div className="td"></div>
      <div className="td"></div>
      {isRejectAppShow ? <RejectApplication id={19935} /> : null}
    </div>
  );
}
