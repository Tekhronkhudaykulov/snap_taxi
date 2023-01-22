import "./InputText.scss";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";

interface InputTextType {
  label: string;
  placeholder: string;
  prompt: boolean | string;
  nameInput: string;
  onChange: () => void;
  props: () => void;
}

function InputText({
  label,
  placeholder,
  prompt,
  nameInput,
  onChange,
  props,
}: InputTextType) {
  return (
    <label className="input-text">
      <span className="input-text__label">{label}</span>
      <div className="input-text__input">
        <input
          onChange={onChange}
          name={nameInput}
          type="text"
          placeholder={placeholder}
          {...props}
        />
        {prompt ? <span className="input-text__prompt">{prompt}</span> : null}
      </div>
    </label>
  );
}

// function InputForPhone({ label, prompt }: InputTextType) {
//   const {
//     control,
//     formState: { errors },
//   } = useForm();
//   return (
//     <label className="input-text">
//       <span className="input-text__label">{label}</span>
//       <div className="input-text__input">
//         {prompt ? <span className="input-text__prompt">{prompt}</span> : null}
//       </div>
//     </label>
//   );
// }

export { InputText };
