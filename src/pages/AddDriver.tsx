import { useForm, Controller } from "react-hook-form";
import { InputText } from "../components/InputText/InputText";
import {
  SelectColor,
  SelectAutoModel,
  DataPicker,
} from "../components/Select/Select";
import CheckBox from "../components/CheckBox/CheckBox";
import NoPhoto from "../img/no-photo.svg";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../store";

interface IsDriverForm {
  avatar: string | {};
  name: string;
  car: {
    type: string;
    color: string;
    number: string;
  };
  phone: string;
  birthday: string;
}

const AddDriver = () => {
  const dispatch = useDispatch<Dispatch>();

  const { control, handleSubmit } = useForm<IsDriverForm>({});

  useEffect(() => {
    dispatch.RateModel.getRatesLoad();
  }, []);

  const allRates = useSelector((state: RootState) => state.RateModel.Rates);

  const convertBase64 = (file, element) => {
    const fileReader = new FileReader();

    fileReader.addEventListener("load", function (e) {
      element.src = e.target.result;
    });

    fileReader.readAsDataURL(file);
  };

  const [rates, setRates] = useState([]);

  // const [birthday, setDate] = useState("");

  // const onChangeDate = (date) => {
  //   setDate(date);
  // };

  return (
    <main className="page page__add-driver">
      <div className="flex items-center mb-5">
        <i className="isax-arrow-left text-2xl cursor-pointer mr-4"></i>
        <h2 className="font-medium">Добавления водителя в систему</h2>
      </div>
      <form
        onSubmit={handleSubmit((data) =>
          dispatch.Drivers.addDriverLoad({ ...data, rates })
        )}
        className="w-3/4"
      >
        <div className="flex gap-x-8 items-end mb-6">
          <label className="input-file">
            <img src={NoPhoto} id="img_file" alt="img " />
            <Controller
              control={control}
              name="avatar"
              render={({ field }) => (
                <input
                  type="file"
                  multiple
                  name="Ads[imageFiles][]"
                  id="file-input"
                  className="img-input"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    convertBase64(
                      e.target.files[0],
                      document.querySelectorAll("#img_file")[0]
                    );
                    field.onChange(e.target.files[0]);
                  }}
                />
              )}
            />
          </label>
          <img src="" className="img-input" id="img_file" alt="" />
          <div>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <InputText
                  nameInput="name"
                  onchange={(e) => field.onChange(e)}
                  label={"Ф.И.О"}
                  placeholder={"Введите данные"}
                />
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-5 mb-6">
          <Controller
            control={control}
            name="car.type"
            render={({ field }) => (
              <SelectAutoModel
                onchange={(e) => field.onChange(e)}
                label={"Модель авто"}
              />
            )}
          />
          <Controller
            control={control}
            name="car.color"
            render={({ field }) => (
              <SelectColor
                onchange={(e) => field.onChange(e)}
                label={"Цвет авто"}
              />
            )}
          />
          <Controller
            control={control}
            name="car.number"
            render={({ field }) => (
              <InputText
                label={"Государственный номер"}
                placeholder={"Введите данные"}
                onChange={(e) => field.onChange(e)}
              />
            )}
          />
          <Controller
            control={control}
            name="birthday"
            render={({ field }) => (
              <DataPicker
                onchange={(e) => field.onChange(e)}
                label="Дата рождения"
              />
            )}
          />

          <label className="input-text">
            <span className="input-text__label">Phone</span>
            <div className="input-text__input">
              <Controller
                control={control}
                name="phone"
                render={({ field }) => (
                  <PhoneInput
                    country={"uz"}
                    defaultMask={"(..) ...-..-.."}
                    placeholder="+998"
                    alwaysDefaultMask={true}
                    onChange={(e) => field.onChange(e)}
                    inputExtraProps={{
                      required: true,
                      autoFocus: true,
                    }}
                  />
                )}
              />
            </div>
          </label>
        </div>
        <div className="grid justify-items-start">
          <h3 className="text-gray-500 mb-4">Выберите тарифы</h3>
          <div className="flex items-center gap-7">
            {allRates?.map((item, key) => (
              <div key={key}>
                <CheckBox
                  item={item}
                  onchange={(isChecked) => {
                    if (rates.includes(item?._id)) {
                      setRates((prevState) =>
                        prevState.filter((id) => id != item._id)
                      );
                    } else {
                      setRates([...rates, item?._id]);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <button type="submit" className="btn mt-10">
          Сохранить
        </button>
      </form>
    </main>
  );
};

export default AddDriver;
