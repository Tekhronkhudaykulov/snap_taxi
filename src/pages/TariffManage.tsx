import { InputText } from "../components/InputText/InputText";
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from "react-hook-form";
import NoPhoto from "../img/no-image.png";
import { useDispatch } from "react-redux";
import { Dispatch } from "../store";

interface IsDriverForm {
  title: string;
  minPrice: string | number;
  pricePerKm: string | number;
  pricePerMin: string | number;
  commission: string | number;
  icon: {};
}
export default function TariffManage({}) {
  const dispatch = useDispatch<Dispatch>();
  const { handleSubmit, control } = useForm<IsDriverForm>();
  const { errors } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<IsDriverForm> = async (data) => {
    dispatch.rates.addRateLoad(data);
  };

  const convertBase64 = (file, element) => {
    const fileReader = new FileReader();

    fileReader.addEventListener("load", function (e) {
      element.src = e.target.result;
    });

    fileReader.readAsDataURL(file);
  };

  return (
    <main className="page page__tariff-manage">
      <div className="flex items-center mb-5">
        <i className="isax-arrow-left text-2xl cursor-pointer mr-4"></i>
        <h2 className="font-medium">Управление тарифами</h2>
      </div>
      <h4 className="text-2xl font-medium	 text-center mb-2">Создать тариф</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10 w-4/5">
        <div className="grid gap-7 grid-cols-3 pr-10 mb-3">
          <Controller
            control={control}
            name="title"
            render={({ field }) => (
              <InputText
                label={"title"}
                onchange={(e) => field.onChange(e)}
                nameInput="title"
                placeholder=""
                prompt=""
              />
            )}
          />
          <Controller
            control={control}
            name="minPrice"
            render={({ field }) => (
              <InputText
                onchange={(e) => field.onChange(e)}
                label={"minPrice"}
                prompt={"за 1 м"}
                nameInput="minPrice"
                placeholder=""
              />
            )}
          />
          <Controller
            control={control}
            name="pricePerKm"
            render={({ field }) => (
              <InputText
                label={"pricePerKm"}
                onchange={(e) => field.onChange(e)}
                nameInput="pricePerKm"
                placeholder=""
                prompt={"за 1 м"}
              />
            )}
          />
          <Controller
            control={control}
            name="pricePerMin"
            render={({ field }) => (
              <InputText
                nameInput="pricePerMin"
                placeholder=""
                prompt={"за 1 м"}
                label={"pricePerMin"}
                onchange={(e) => field.onChange(e)}
              />
            )}
          />
          <Controller
            control={control}
            name="commission"
            render={({ field }) => (
              <InputText
                placeholder=""
                prompt={"за 1 м"}
                label={"commission"}
                onchange={(e) => field.onChange(e)}
                nameInput="commission"
              />
            )}
          />
          <label className="input-file">
            <img src={NoPhoto} id="img_file" alt="img " />
            <Controller
              control={control}
              name="icon"
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
        </div>
        <button className="btn" type="submit">
          Сохранить
        </button>
      </form>
    </main>
  );
}
