import React, { FunctionComponent } from 'react';
import cx from 'classnames';

type MyProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

const Button: FunctionComponent<MyProps> = ({ className, ...rest }) => {
  return <button className={cx('btn btn--violet', className)} type="button" {...rest} />;
};

export default Button;
