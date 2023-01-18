import { useDispatch } from "react-redux";
import { baseUrl } from "../../contants/API";
import { Dispatch } from "../../store";
import { GetBrandsType } from "../../store/directory/types";
import Skeleton from "react-loading-skeleton";

interface IsPhotoType {
  brand: GetBrandsType;
  index: string | number;
  isLoading: boolean;
}

const TableRowForCar = ({ brand, index, isLoading }: IsPhotoType) => {
  const dispatch = useDispatch<Dispatch>();
  return (
    <>
      {isLoading ? (
        <Skeleton height={55} />
      ) : (
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
      )}
    </>
  );
};

export default TableRowForCar;
