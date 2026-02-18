import React from 'react'

function Inputfield({label, onChange, type, name, value, min, max, title, placeholder}) {
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

      />
    </div>
  )
}

export default Inputfield
