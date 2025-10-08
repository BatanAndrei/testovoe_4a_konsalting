import React from 'react';
import classNames from 'classnames';

export default function CustomCheckbox({
  id,
  checked,
  handleChange,
  validationCheckbox,
  borderColor = '#606566',
  checkColor = '#fdb056',
  size = 32,
  className = '',
}) {
  const boxStyle = {
    width: size,
    height: size,
    borderColor: !validationCheckbox ? 'red' : borderColor,
    color: checkColor,
  };

  return (
    <label
      htmlFor={id}
      className={classNames(
        'cursor-pointer inline-flex items-center',
        className
      )}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="hidden peer"
      />
      <span
        style={boxStyle}
        className="mt-[10px] flex justify-center items-center border bg-transparent transition-colors duration-200 relative before:content-[''] before:w-[20px] before:h-[10px] before:border-l-2 before:border-b-2 before:border-current before:rotate-[-45deg] before:translate-x-[0px] before:translate-y-[-4px] before:opacity-0 peer-checked:before:opacity-100"
      ></span>
    </label>
  );
}
