import "./InputText.scss";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";

interface InputTextType {
  label: string;
  placeholder: string;
  prompt: boolean | string;
  nameInput: string;
  name: string;
  formProps: () => void;
}

function InputText({
  label,
  placeholder,
  prompt,
  nameInput,
  formProps,
}: InputTextType) {
  return (
    <label className="input-text">
      <span className="input-text__label">{label}</span>
      <div className="input-text__input">
        <input
          name={nameInput}
          {...formProps}
          type="text"
          placeholder={placeholder}
        />
        {prompt ? <span className="input-text__prompt">{prompt}</span> : null}
      </div>
    </label>
  );
}

function InputForPhone({ label, prompt }: InputTextType) {
  const {
    control,
    formState: { errors },
  } = useForm();
  return (
    <label className="input-text">
      <span className="input-text__label">{label}</span>
      <div className="input-text__input">
        <Controller
          control={control}
          name="phone"
          rules={{ required: true }}
          render={({ field: { ref, ...field } }) => (
            <PhoneInput
              {...field}
              country={"uz"}
              defaultMask={"(..) ...-..-.."}
              placeholder="+998"
              alwaysDefaultMask={true}
              name="phone"
              inputExtraProps={{
                ref,
                required: true,
                autoFocus: true,
              }}
            />
          )}
        />
        {prompt ? <span className="input-text__prompt">{prompt}</span> : null}
      </div>
    </label>
  );
}

export { InputText, InputForPhone };
