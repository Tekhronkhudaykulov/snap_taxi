import { useDispatch } from "react-redux";
import { Dispatch } from "../../store";
import Skeleton from "react-loading-skeleton";
import { GetBrandsType } from "../../store/directory/types";

interface IsCars {
  brand: GetBrandsType;
  index: string | number;
  isLoading: boolean;
}
const TableRowForCar = ({ brand, isLoading, index }: IsCars) => {
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
              src={brand.logo}
              alt=""
            />
          </div>
          {index}
          <div className="td">{brand.name}</div>
        </div>
      )}
    </>
  );
};

export default TableRowForCar;
