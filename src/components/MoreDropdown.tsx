import React from 'react';
import cx from 'classnames';
import { MoreVertical } from 'svgs';
import useOnClickOutside from 'hooks/useOnClickOutside';

const MoreDropdown: React.FC<{ className?: string }> = ({ children, className }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isMenuOpen, updateIsMenuOpen] = React.useState(false);
  useOnClickOutside(ref, () => updateIsMenuOpen(false));

  return (
    <div className={cx('relative z-10 ', className)} ref={ref}>
      <button
        type="button"
        className={cx({
          'btn-fab': true,
          'btn--grey': !isMenuOpen,
          'btn--grey-active': isMenuOpen,
        })}
        onClick={() => updateIsMenuOpen(!isMenuOpen)}
      >
        <MoreVertical className="w-4 h-4" />
      </button>

      {isMenuOpen && (
        <div className="absolute pin-r py-4 w-48 rounded-sm bg-white shadow-lg">{children}</div>
      )}
    </div>
  );
};

export default MoreDropdown;
