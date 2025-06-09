import React from "react";

export const Input = ({
  id,
  type,
  name,
  value,
  placholder,
  onChange,
  className,
}) => {
  return (
    <div>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placholder={placholder}
        onChange={onChange}
        className={className}
      ></input>
    </div>
  );
};
