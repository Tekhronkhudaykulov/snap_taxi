import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import RejectApplication from "../../components/RejectApplication/RejectApplication";
import { Dispatch } from "../../store";
import { GetType } from "../../store/directory/types";

interface IsPhotoType {
  type: GetType;
  isLoading: boolean;
}

const TableRowForType = ({ type, isLoading }: IsPhotoType) => {
  const [isRejectAppShow, setIsRejectAppShow] = useState(false);
  const dispatch = useDispatch<Dispatch>();

  return (
    <>
      {isLoading ? (
        <Skeleton height={55} />
      ) : (
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
      )}
    </>
  );
};

export default TableRowForType;
