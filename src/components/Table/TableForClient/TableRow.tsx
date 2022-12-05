import { useState } from "react";
import RejectApplication from "../../../components/RejectApplication/RejectApplication";

const TableRowItemsClient = () => {
  const [isRejectAppShow, setIsRejectAppShow] = useState(false);

  return (
    <div className="trow">
      <div className="td td-for-client">
        <img style={{ width: "40px", height: "40px" }} src="" alt="" />
        _id
      </div>
      <div className="td">name</div>
      {isRejectAppShow ? <RejectApplication id={19935} /> : null}
    </div>
  );
};

export default TableRowItemsClient;
