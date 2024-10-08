import React from 'react'

const CheckboxField = ({ type, name, checked, onChange, error }) => {
  return (
    <label className="checkbox-label">
      <input 
        type={type} 
        name={name} 
        checked={checked}
        onChange={onChange}
        />
        {error && <p className="error">{error}</p>}
    </label>
  )
}

export default CheckboxField
