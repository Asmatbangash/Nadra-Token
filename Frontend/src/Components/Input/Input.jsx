import React from "react";

function Input({
  type = "text",
  id,
  className = "",
  value,
  onChange,
  required,
  ...props
}) {
  return (
    <input
      className={`${className}`}
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      {...props}
      required={required}
    />
  );
}

export default Input;
