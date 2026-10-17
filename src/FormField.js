import React from "react";

function FormField({ label, name, type, value, onChange }) {
  return (
    <label>
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        aria-label={label}  // accessibility improvement
      />
    </label>
  );
}

export default FormField;
