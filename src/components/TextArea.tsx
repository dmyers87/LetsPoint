import React from 'react';
import cx from 'classnames';

type MyProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id: string;
  label: string;
  className?: string | object;
};

const TextArea = React.forwardRef((props: MyProps, ref: React.RefObject<HTMLTextAreaElement>) => {
  const { id, label, className, ...passthrough } = props;

  return (
    <div className={cx('mb-5', className)}>
      <label htmlFor={id} className="block leading-tight text-grey-6">
        {label}
      </label>
      <textarea
        id={id}
        className={cx(
          'py-2 block w-full',
          'border-b border-grey-3',
          'outline-none focus:border-teal-7'
        )}
        ref={ref}
        {...passthrough}
      />
    </div>
  );
});

export default TextArea;
