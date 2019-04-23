import React from 'react';
import cx from 'classnames';

type MyProps = {
  className?: any;
};
const ErrorBox: React.FC<MyProps> = ({ className, ...rest }) => {
  return (
    <div
      className={cx(className, 'text-red-9 bg-red-2 border-red-6 border-b border-t p-3')}
      {...rest}
    />
  );
};

export default ErrorBox;
