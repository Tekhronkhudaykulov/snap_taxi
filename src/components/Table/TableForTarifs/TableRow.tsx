import { useState } from "react";
import { Rates } from "../../../store/rates/types";
import RejectApplication from "../../RejectApplication/RejectApplication";

interface TableRowTtype {
  status: string;
  Rates: Rates;
  index: string | number;
}
const TableRowItemsForTarifs = ({ status, Rates, index }: TableRowTtype) => {
  const [isRejectAppShow, setIsRejectAppShow] = useState(false);

  return (
    <div className={`trow ${status}`}>
      <div className="td ">{index}</div>
      <div className="td">{Rates?.title}</div>
      <div className="td">{Rates?.minPrice}</div>
      <div className="td">{Rates?.pricePerKm}</div>
      <div className="td">{Rates?.pricePerMin}</div>
      <div className="td">{Rates?.commission}</div>
      <div className="td">{Rates?.createdAt}</div>
      <div className="td">{Rates?.updatedAt}</div>
      {isRejectAppShow ? <RejectApplication id={19935} /> : null}
    </div>
  );
};

export default TableRowItemsForTarifs;
