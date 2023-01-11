import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RejectApplication from "../../components/RejectApplication/RejectApplication";
import { Dispatch, RootState } from "../../store";
import { GetType } from "../../store/directory/types";

interface IsPhotoType {
  type: GetType;
}

const TableRowForType = ({ type }: IsPhotoType) => {
  const [isRejectAppShow, setIsRejectAppShow] = useState(false);
  const dispatch = useDispatch<Dispatch>();

  const isLoading = useSelector(
    (state: RootState) => state.loading.effects.Directory.getTypes
  );

  return (
    <div
      className="trow"
      onClick={() => {
        dispatch.other.setShowForType(true);
        dispatch.Directory.getTypesById(type?._id);
      }}
    >
      <div className="td td-for-client">{type?._id}</div>
      <div className="td">{type?.name}</div>
      {isRejectAppShow ? <RejectApplication id={19935} /> : null}
    </div>
  );
};

export default TableRowForType;
