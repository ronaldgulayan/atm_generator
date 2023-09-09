import React from "react";
import { useId } from "react";

function TextBox({ label, placeholder, value = "", setValue = () => {} }) {
  const id = useId();
  return (
    <div className='flex flex-col w-full py-2 px-1'>
      <label className='text-sm font-poppins text-slate-600' htmlFor={id}>
        {label}
      </label>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        autoComplete='off'
        placeholder={placeholder}
        className='w-full font-poppins text-slate-800 h-10 border px-3 rounded-md border-slate-400'
        type='text'
        id={id}
      />
    </div>
  );
}

export default TextBox;
