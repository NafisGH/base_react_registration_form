import React from 'react'

const InputField = ({ name, type, placeholder, value, onChange, error }) => {
  return (
    <label>
      <input 
        type={type} 
        name={name} 
        value={value} 
        placeholder={placeholder} 
        onChange={onChange} 
        />
        {error && <p className="error">{error}</p>}
    </label>
  )
}

export default InputField
