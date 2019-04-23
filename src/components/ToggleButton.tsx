import React from 'react';
import cx from 'classnames';

type MyProps = {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: any;
};
const ToggleButton: React.FC<MyProps> = ({ checked, onChange, label, className }) => {
  return (
    <label className={cx('flex items-center', className)}>
      {label && <span className="mr-2 leading-tight text-sm text-grey-6">{label}</span>}
      <div
        style={{
          transition: 'background-color 600ms, border-color 600ms',
        }}
        className={cx({
          'inline-block rounded-full border': true,
          'cursor-default': true,
          'bg-grey-1': !checked,
          'bg-cyan-6': checked,
          'border-cyan-7': checked,
        })}
      >
        <div className="h-5 w-12 relative">
          <div
            style={{
              transition: 'transform 150ms',
              // NOTE: This is kind of bound to the design system
              transform: `translateX(${checked ? 3 - 1.25 : 0}rem)`,
            }}
            className="w-5 h-5 pin-t pin-l rounded-full bg-white shadow absolute"
          />
          <input
            type="checkbox"
            className="absolute w-full h-full opacity-0 cursor-pointer"
            checked={checked}
            onChange={onChange}
          />
        </div>
      </div>
    </label>
  );
};

export default ToggleButton;
