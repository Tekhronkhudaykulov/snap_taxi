import { useState } from "react";
import RejectApplication from "../../../components/RejectApplication/RejectApplication";
import { GetClient } from "../../../store/clients/types";

interface Clients {
  clients: GetClient;
  index: string | number;
}
const TableRowItemsClient = ({ clients, index }: Clients) => {
  const [isRejectAppShow, setIsRejectAppShow] = useState(false);

  return (
    <div className="trow">
      <div className="td td-for-client">
        <img style={{ width: "40px", height: "40px" }} src="" alt="" />
        {index}
      </div>
      <div className="td">{clients?.user?.role}</div>
      <div className="td">{clients?.user?.phone}</div>
      {isRejectAppShow ? <RejectApplication id={19935} /> : null}
    </div>
  );
};

export default TableRowItemsClient;
