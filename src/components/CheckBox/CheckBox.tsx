import "./CheckBox.scss";

interface CheckboxType {
  text: string;
}
const CheckBox = ({ text }: CheckboxType) => {
  return (
    <label className="checkbox">
      <input type="checkbox" />
      <span>{text}</span>
    </label>
  );
};

export default CheckBox;
