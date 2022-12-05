import React, { useState } from "react";
import RejectApplication from "../../components/RejectApplication/RejectApplication";
import { baseUrl } from "../../contants/API";
import { GetBrandsType } from "../../store/directory/types";

interface IsPhotoType {
  brand: GetBrandsType;
  index: string | number;
}

const TableRowForCar = ({ brand, index }: IsPhotoType) => {
  const [isRejectAppShow, setIsRejectAppShow] = useState(false);

  return (
    <div className="trow">
      <div className="td td-for-client">
        <img
          style={{ width: "40px", height: "40px" }}
          src={`${baseUrl}/${brand?.logo}`}
          alt=""
        />
        {index}
      </div>
      <div className="td">{brand?.name}</div>
      {isRejectAppShow ? <RejectApplication id={19935} /> : null}
    </div>
  );
};

export default TableRowForCar;
