import { useState } from "react";
import { Rates } from "../../../store/rates/types";
import RejectApplication from "../../RejectApplication/RejectApplication";
import Skeleton from "react-loading-skeleton";

interface TableRowTtype {
  status: string;
  Rates: Rates;
  index: string | number;
  isLoading: boolean;
}
const TableRowItemsForTarifs = ({
  status,
  Rates,
  index,
  isLoading,
}: TableRowTtype) => {
  const [isRejectAppShow, setIsRejectAppShow] = useState(false);

  return (
    <>
      {isLoading ? (
        <Skeleton height={55} />
      ) : (
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
      )}
    </>
  );
};

export default TableRowItemsForTarifs;
