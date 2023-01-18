import { useState } from "react";
import RejectApplication from "../../../components/RejectApplication/RejectApplication";
import Skeleton from "react-loading-skeleton";
import { GetClient } from "../../../store/clients/types";

interface Clients {
  clients: GetClient;
  index: string | number;
  isLoading: boolean;
}
const TableRowItemsClient = ({ clients, index, isLoading }: Clients) => {
  const [isRejectAppShow, setIsRejectAppShow] = useState(false);

  return (
    <>
      {isLoading ? (
        <Skeleton height={55} />
      ) : (
        <div className="trow">
          <div className="td td-for-client">
            <img style={{ width: "40px", height: "40px" }} src="" alt="" />
            {index}
          </div>
          <div className="td">{clients?.user?.role}</div>
          <div className="td">{clients?.user?.phone}</div>
          {isRejectAppShow ? <RejectApplication id={19935} /> : null}
        </div>
      )}
    </>
  );
};

export default TableRowItemsClient;
