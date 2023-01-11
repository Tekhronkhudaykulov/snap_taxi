import { Rates } from "../../store/rates/types";
import "./CheckBox.scss";

interface CheckboxType {
  item: Rates;
  onChange: () => void;
}
const CheckBox = ({ item, onChange }: CheckboxType) => {
  return (
    <label className="checkbox">
      <input
        id={item?._id}
        value={item?._id}
        onChange={onChange}
        type="checkbox"
      />
      <span>{item?.title}</span>
    </label>
  );
};

export default CheckBox;
