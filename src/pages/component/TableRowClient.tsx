import React, { useState } from "react";
import { useDispatch } from "react-redux";
import RejectApplication from "../../components/RejectApplication/RejectApplication";
import { baseUrl } from "../../contants/API";
import { Dispatch } from "../../store";
import { GetBrandsType } from "../../store/directory/types";

interface IsPhotoType {
  brand: GetBrandsType;
  index: string | number;
}

const TableRowForCar = ({ brand, index }: IsPhotoType) => {
  const dispatch = useDispatch<Dispatch>();
  return (
    <div
      className="trow"
      onClick={() => {
        dispatch.other.setShowForBrand(true);
        dispatch.Directory.getBrandById(brand?._id);
      }}
    >
      <div className="td td-for-client">
        <img
          style={{ width: "40px", height: "40px" }}
          src={`${baseUrl}/${brand?.logo}`}
          alt=""
        />
        {index}
      </div>
      <div className="td">{brand?.name}</div>
    </div>
  );
};

export default TableRowForCar;
