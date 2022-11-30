import { useForm, Resolver } from "react-hook-form";
import { InputForPhone, InputText } from "../components/InputText/InputText";
import {
  SelectColor,
  SelectAutoModel,
  DataPicker,
} from "../components/Select/Select";
import CheckBox from "../components/CheckBox/CheckBox";
import NoPhoto from "../img/no-photo.svg";
import { useState } from "react";

type FormValues = {
  name: string;
  avatar: string;
  passportNumber: string;
  autoModel: string;
  gosNumber: string;
  birthdat: number;
  phone: number;
  photoCars: string[];
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.name ? values : {},
    errors: !values.name
      ? {
          name: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

const AddDriver = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event: any) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  const convertBase64 = (file, element) => {
    const fileReader = new FileReader();

    fileReader.addEventListener("load", function (e) {
      element.src = e.target.result;
    });

    fileReader.readAsDataURL(file);
  };

  return (
    <main className="page page__add-driver">
      <div className="flex items-center mb-5">
        <i className="isax-arrow-left text-2xl cursor-pointer mr-4"></i>
        <h2 className="font-medium">Добавления водителя в систему</h2>
      </div>
      <form onSubmit={onSubmit} className="w-3/4">
        <div className="flex gap-x-8 items-end mb-6">
          <label class="input-file">
            <img src={NoPhoto} id="img_file" alt="img " />
            <input
              type="file"
              multiple
              name="Ads[imageFiles][]"
              onchange="loadImage(event)"
              id="file-input"
              className="img-input"
              style={{ display: "none" }}
              onChange={(e) => {
                convertBase64(
                  e.target.files[0],
                  document.querySelectorAll("#img_file")[0]
                );
                setPhoto(e.target.files[0]);
              }}
            />
          </label>
          <img src="" className="img-input" id="img_file" alt="" />
          <div>
            <InputText
              nameInput="name"
              label={"Ф.И.О"}
              placeholder={"Введите данные"}
              formProps={register("name", { required: true })}
            />
            {errors.name && (
              <p className="validation">Malumotlarni kiriting!</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-5 mb-6">
          <InputText
            label={"Серия и номер паспорта"}
            placeholder={"Введите данные"}
          />
          <SelectAutoModel label={"Модель авто"} />
          <SelectColor label={"Цвет авто"} />
          <InputText
            label={"Государственный номер"}
            placeholder={"Введите данные"}
          />
          <div>
            <DataPicker label="Дата рождения" />
          </div>
          <InputForPhone
            nameInput="phone"
            label={"Номер телефона"}
            placeholder={"Введите данные"}
          />
        </div>
        <div className="photo-car mb-10">
          <label className="photo-car__input">
            <span>
              Добавить <br /> фото авто
            </span>
            <input
              type="file"
              name="images"
              onChange={onSelectFile}
              multiple
              accept="image/png , image/jpeg, image/webp"
            />
          </label>
          <div className="photo-car__items">
            {selectedImages &&
              selectedImages.map((image, index) => {
                return (
                  <div key={image} className="image">
                    <img
                      style={{
                        marginLeft: "30px",
                        height: "100px",
                        width: "100px",
                        objectFit: "cover",
                      }}
                      src={image}
                      id="img_file"
                      className="photo-car__item"
                      alt="upload"
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="grid justify-items-start">
          <h3 className="text-gray-500 mb-4">Выберите тарифы</h3>
          <div className="flex items-center gap-7">
            <CheckBox text={"Эконом"} />
            <CheckBox text={"Стандарт"} />
            <CheckBox text={"Комфорт"} />
            <CheckBox text={"Бизнес"} />
            <CheckBox text={"Доставка"} />
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
