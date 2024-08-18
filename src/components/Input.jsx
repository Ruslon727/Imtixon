import React from 'react'

function Input({placeholder, type, name, extraStyle, isRuquired, onChange, value, style}) {
  return (
    <input style={style} value={value} required={isRuquired} placeholder={placeholder} type={type} name={name} onChange={onChange} className={`w-[248px] h-[42px] rounded-[4px] text-[#8A8A8A] border-[1px] border-[#A7A7A7] font-[Kumbh Sans] leading-[17.36px] text-[14px] font-medium ${extraStyle}`}/>
  )
}

export default Input