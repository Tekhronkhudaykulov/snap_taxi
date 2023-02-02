import { Rates } from "../../store/rates/types";
import "./CheckBox.scss";

interface CheckboxType {
  item: Rates;
  onchange: (e: any) => void;
}
const CheckBox = ({ item, onchange }: CheckboxType) => {
  return (
    <label className="checkbox">
      <input
        id={item?._id}
        value={item?._id}
        onChange={onchange}
        type="checkbox"
      />
      <span>{item?.title}</span>
    </label>
  );
};

export default CheckBox;
