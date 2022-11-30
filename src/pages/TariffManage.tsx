import { SelectPoligon } from "../components/Select/Select";
import { InputText } from "../components/InputText/InputText";

export default function TariffManage({}) {
  return (
    <main className="page page__tariff-manage">
      <div className="flex items-center mb-5">
        <i className="isax-arrow-left text-2xl cursor-pointer mr-4"></i>
        <h2 className="font-medium">Управление тарифами</h2>
      </div>
      <form className="mt-10 w-4/5">
        <div className="grid grid-cols-4 mb-10">
          <SelectPoligon label={"Выберите полигон"} />
        </div>
        <div className="grid grid-cols-3 mb-8">
          <div className="econom border-r-2 border-r-gray-500 border-solid">
            <h4 className="font-medium text-center mb-5">Эконом</h4>
            <div className="grid gap-7 pr-10">
              <InputText
                label={"Цена за вызов"}
                nameInput=""
                placeholder=""
                prompt=""
              />
              <InputText
                label={"Цена за вызов"}
                prompt={"за 1 м"}
                nameInput=""
                placeholder=""
              />
              <InputText
                label={"Цена за км (Загородом)"}
                nameInput=""
                placeholder=""
                prompt={"за 1 м"}
              />
              <InputText
                nameInput=""
                placeholder=""
                prompt={"за 1 м"}
                label={"В ожидании"}
              />
              <InputText
                placeholder=""
                prompt={"за 1 м"}
                label={"В ожидании"}
                nameInput=""
              />
              <InputText
                placeholder=""
                prompt={"за 1 м"}
                label={"В ожидании"}
                nameInput=""
              />
              <InputText
                placeholder=""
                prompt={"за 1 м"}
                label={"Бесплатных километров"}
                nameInput=""
              />
              <InputText
                placeholder=""
                prompt={"за 1 м"}
                label={"Процент"}
                nameInput=""
              />
            </div>
          </div>
          <div className="standart border-r-2 border-r-gray-500 border-solid">
            <h4 className="font-medium text-center mb-5">Стандарт</h4>
            <div className="grid gap-7 px-8">
              <InputText
                label={"Цена за вызов"}
                nameInput=""
                placeholder=""
                prompt=""
              />
              <InputText
                label={"Цена за вызов"}
                prompt={"за 1 м"}
                nameInput=""
                placeholder=""
              />
              <InputText
                label={"Цена за км (Загородом)"}
                prompt={"за 1 м"}
                nameInput=""
                placeholder=""
              />
              <InputText
                nameInput=""
                placeholder=""
                label={"В ожидании"}
                prompt={"за 1 м"}
              />
              <InputText
                nameInput=""
                placeholder=""
                prompt
                label={"Кондиционер"}
              />
              <InputText
                nameInput=""
                placeholder=""
                prompt
                label={"Перевозка животных"}
              />
              <InputText
                nameInput=""
                placeholder=""
                label={"Бесплатных километров"}
                prompt={"км"}
              />
              <InputText
                nameInput=""
                placeholder=""
                label={"Процент"}
                prompt={"%"}
              />
            </div>
          </div>
          <div className="comfort">
            <h4 className="font-medium text-center mb-5">Комфорт</h4>
            <div className="grid gap-7 pl-8">
              <InputText
                label={"Цена за вызов"}
                nameInput=""
                placeholder=""
                prompt
              />
              <InputText
                label={"Цена за вызов"}
                prompt={"за 1 м"}
                nameInput=""
                placeholder=""
              />
              <InputText
                label={"Цена за км (Загородом)"}
                prompt={"за 1 м"}
                nameInput=""
                placeholder=""
              />
              <InputText
                nameInput=""
                placeholder=""
                label={"В ожидании"}
                prompt={"за 1 м"}
              />
              <InputText
                nameInput=""
                placeholder=""
                prompt
                label={"Кондиционер"}
              />
              <InputText
                nameInput=""
                placeholder=""
                prompt
                label={"Перевозка животных"}
              />
              <InputText
                nameInput=""
                placeholder=""
                label={"Бесплатных километров"}
                prompt={"км"}
              />
              <InputText
                nameInput=""
                placeholder=""
                label={"Процент"}
                prompt={"%"}
              />
            </div>
          </div>
        </div>
        <button className="btn">Сохранить</button>
      </form>
    </main>
  );
}
