import React from 'react'

function Inputfield({label,required, onChange, type, name, minLength, value,maxLength, min,pattern, max, title, placeholder}) {
  return (
    <div>
      <label className='label-login'>{label}</label>
      <input className='input-login'
      type={type}
      onChange={onChange} 
       name={name}
        value={value}
        min={min}
         max={max}
         title={title} 
         placeholder={placeholder}
         minLength={minLength}
          maxLength={maxLength}
         pattern={pattern}
         required={required}

      />
    </div>
  )
}

export default Inputfield
