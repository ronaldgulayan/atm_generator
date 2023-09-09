import React, { useId } from "react";

function NameField({
  label,
  placeholder,
  value = "",
  setValue = function () {},
}) {
  const id = useId();

  const onChangeEventHandler = (e) => {
    const value = e.target.value;
    if (value.charAt(value.length - 1) === " ") return;
    const firstLetter = value.charAt(0).toUpperCase();
    const otherLetters = value.substring(1, value.length).toLowerCase();
    setValue(firstLetter + otherLetters);
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
        value={value}
        onChange={onChangeEventHandler}
      />
    </div>
  );
}

export default NameField;
