import "./Polygon.scss";
import { InputText } from "../InputText/InputText";

export default function PolygonInput({}) {
  return (
    <form className="polygon">
      <h4 className="mt-16 mb-8 text-center font-medium text-stone-800">
        Полигон Дружба народов
      </h4>
      <div className="grid gap-5 pb-10">
        <InputText
          label="Эконом"
          formProps={() => console.log("asflkans")}
          name=""
          nameInput=""
          placeholder=""
          prompt
        />
        <InputText
          label="Комфорт"
          formProps={() => console.log("asflkans")}
          name=""
          nameInput=""
          placeholder=""
          prompt
        />
        <InputText
          label="Бизнес"
          formProps={() => console.log("asflkans")}
          name=""
          nameInput=""
          placeholder=""
          prompt
        />
      </div>
      <button className="btn-danger mx-auto my-6">Удалить полигон</button>
    </form>
  );
}
