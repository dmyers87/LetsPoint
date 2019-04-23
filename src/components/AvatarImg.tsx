import React, { FunctionComponent } from 'react';
import cx from 'classnames';

type MyProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  src: string;
  alt: string;

  // If you want a floating dot in the bottom right, specify the bg-color
  dotColor?: string;
  className?: string;
};

const AvatarImg: FunctionComponent<MyProps> = ({ src, alt, className, dotColor, ...rest }) => {
  return (
    <div className={cx('relative', className)}>
      {dotColor && (
        <span
          className={cx(
            'absolute z-10 w-3 h-3 -mr-1 -mb-1 pin-b pin-r',
            'rounded-full pointer-events-none',
            dotColor
          )}
        />
      )}
      <span className="absolute h-full rounded-full shadow-inner w-full pointer-events-none" />
      <img src={src} alt={alt} {...rest} className="rounded-full overflow-hidden" />
    </div>
  );
};

export default AvatarImg;
