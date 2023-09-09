import React, { useId } from "react";

function CardNumberField({
  label,
  placeholder,
  _value = "",
  setValue = function () {},
}) {
  const id = useId();
  const NUMBERS = [..."0123456789"];

  const onChangeEventHandler = (e) => {
    let value = e.target.value;
    if (value.length > 14) return;
    const lastChar = value.charAt(value.length - 1);

    if (lastChar !== "") {
      if (lastChar === " ") {
        value = value.substring(0, value.length - 1);
        setValue(value);
        return;
      }
      if (!NUMBERS.includes(lastChar)) return;
    }

    if (value.length <= 4) {
      if (value.length === 4) {
        value += " ";
      }
      setValue(value);
    } else if (value.length <= 9) {
      if (value.length === 9) {
        value += " ";
      }
      setValue(value);
    } else if (value.length <= 14) {
      setValue(value);
    }
  };

  return (
    <div className='w-full flex flex-col gap-y-[0.2rem] font-poppins'>
      <label
        className='text-slate-500 text-xs after:content-["*"] after:text-red-500'
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        className='w-full px-3 text-sm outline-purple-900 rounded-sm border-2 border-slate-400 h-10 text-slate-600 placeholder:font-thin'
        placeholder={placeholder}
        type='text'
        autoComplete='off'
        value={_value}
        onChange={onChangeEventHandler}
      />
    </div>
  );
}

export default CardNumberField;
