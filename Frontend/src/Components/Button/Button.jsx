import React from "react";

function Button({
  type = "button",
  text = "button",
  className = "",
  onClick,
  ...props
}) {
  return (
    <button
      className={`cursor-pointer ${className}`}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
}

export default Button;
