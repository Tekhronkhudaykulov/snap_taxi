import React, { useState } from "react";
import { useDispatch } from "react-redux";
import RejectApplication from "../../components/RejectApplication/RejectApplication";
import { baseUrl } from "../../contants/API";
import ClientImg from "../../img/client.png";
import { Dispatch } from "../../store";
import { Color, GetBrandsType } from "../../store/directory/types";

interface IsPhotoType {
  color: Color;
  index: string | number;
}

const TableRowForColor = ({ color, index }: IsPhotoType) => {
  const [isRejectAppShow, setIsRejectAppShow] = useState(false);
  const dispatch = useDispatch<Dispatch>();

  return (
    <div
      className="trow"
      onClick={() => {
        dispatch.Directory.getColorById(color?._id);
        dispatch.other.setShowForColor(true);
      }}
    >
      <div className="td td-for-client">{index}</div>
      <div className="td">{color?.name}</div>
      <div className="td">{color?.code}</div>
      {isRejectAppShow ? <RejectApplication id={19935} /> : null}
    </div>
  );
};

export default TableRowForColor;
