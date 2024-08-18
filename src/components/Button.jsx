import React from "react";

function Button({ title, extraStyle, children, onClick }) {
  return (
    <button
    onClick={onClick}
      id="button"
      className={`w-[248px] h-[42px] bg-[#1da1f2] text-white font-bold text-[14px] leading-[17.36px]  ${extraStyle}`}
    >
      {title}
      {children}
    </button>
  );
}

export default Button;
