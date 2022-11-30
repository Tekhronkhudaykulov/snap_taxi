import React, { useState } from "react";
import { useSelector } from "react-redux";
import RejectApplication from "../../components/RejectApplication/RejectApplication";
import { RootState } from "../../store";
import { GetType } from "../../store/directory/types";

interface IsPhotoType {
  type: GetType;
}

const TableRowForType = ({ type }: IsPhotoType) => {
  const [isRejectAppShow, setIsRejectAppShow] = useState(false);

  const isLoading = useSelector(
    (state: RootState) => state.loading.effects.Directory.getTypes
  );

  console.log(isLoading);

  return (
    <div className="trow">
      <div className="td td-for-client">{type?._id}</div>
      <div className="td">{type?.name}</div>
      {isRejectAppShow ? <RejectApplication id={19935} /> : null}
    </div>
  );
};

export default TableRowForType;
