import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../store";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./Select.scss";

interface SelectType {
  label: string;
}

function DataPicker({ label }: SelectType) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <label className="input-text">
      <span className="input-text__label">{label}</span>
      <div className="input-text__input">
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
        />
      </div>
    </label>
  );
}

function SelectAutoModel({ label }: SelectType) {
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.Directory.getBrands();
  }, []);

  const { brand, colorList } = useSelector(
    (state: RootState) => state.Directory
  );
  return (
    <label className="select">
      <span className="select__label">{label}</span>
      <div className="select__opts">
        <i className="isax-arrow-down-1"></i>
        <select>
          <option disabled>Выберите данные</option>
          {brand.map((item) => (
            <option value={item?._id}>{item?.name}</option>
          ))}
        </select>
      </div>
    </label>
  );
}

function SelectColor({ label }: SelectType) {
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.Directory.getColors();
  }, []);

  const { colorList } = useSelector((state: RootState) => state.Directory);
  return (
    <label className="select">
      <span className="select__label">{label}</span>
      <div className="select__opts">
        <i className="isax-arrow-down-1"></i>
        <select>
          <option disabled>Выберите данные</option>
          {colorList.map((item) => (
            <option value={item?._id}>{item?.name}</option>
          ))}
        </select>
      </div>
    </label>
  );
}

function SelectPoligon({ label }: SelectType) {
  return (
    <label className="select">
      <span className="select__label">{label}</span>
      <div className="select__opts">
        <i className="isax-arrow-down-1"></i>
        <select>
          <option disabled>Выберите данные</option>
          <option>BMW</option>
          <option>BMW</option>
        </select>
      </div>
    </label>
  );
}

export { SelectAutoModel, SelectColor, SelectPoligon, DataPicker };
