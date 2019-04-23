import React, { useState } from 'react';
import cx from 'classnames';
import labelCSS from './labelCSS';

type MyProps = {
  id: string;
  label: string;
  className?: string | object;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef((props: MyProps, ref: React.RefObject<HTMLInputElement>) => {
  const { id, label, className, ...passthrough } = props;
  const [hasFocus, setHasFocus] = useState(false);

  if (
    passthrough.onFocus ||
    passthrough.onBlur ||
    passthrough.placeholder ||
    passthrough.defaultValue
  ) {
    console.warn('TODO');
    return null;
  }

  const showLabel = passthrough.value || hasFocus;
  const placeholder = showLabel ? '' : label;

  return (
    <div className={cx('mb-3', className)}>
      <label
        htmlFor={id}
        className={cx(labelCSS, {
          'animate-fade': true,
          'animate-fade--hidden': !showLabel,
          'animate-fade--visible': showLabel,
        })}
      >
        {label}
      </label>
      <input
        type="text"
        name={id}
        {...passthrough}
        placeholder={placeholder}
        id={id}
        className={cx(
          'py-2 block w-full placeholder:text-grey-8',
          'border-b border-gray-3',
          'outline-none focus:border-teal-7'
        )}
        ref={ref}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
    </div>
  );
});

export default Input;
