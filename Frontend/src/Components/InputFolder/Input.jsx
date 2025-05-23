import React from "react";

function Input({
  type = "text",
  id,
  className = "",
  value,
  onChange,
  required,
  readOnly,
  ...props
}) {
  return (
    <input
      className={`${className}`}
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      readOnly={readOnly}
      {...props}
    />
  );
}

export default Input;
