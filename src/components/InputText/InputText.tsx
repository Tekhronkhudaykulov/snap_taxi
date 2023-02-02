import "./InputText.scss";

interface InputTextType {
  label: string;
  placeholder: string;
  prompt: boolean | string;
  nameInput: string;
  onchange: (e: any) => void;
}

function InputText({
  label,
  placeholder,
  prompt,
  nameInput,
  onchange,
}: InputTextType) {
  return (
    <label className="input-text">
      <span className="input-text__label">{label}</span>
      <div className="input-text__input">
        <input
          onChange={onchange}
          name={nameInput}
          type="text"
          placeholder={placeholder}
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
