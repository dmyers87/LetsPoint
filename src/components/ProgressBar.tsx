import React from 'react';

type MyProps = {
  percent: number;
};

const ProgressBar: React.FC<MyProps> = ({ children, percent }) => {
  return (
    <div className="flex items-center">
      <label className="text-grey-6 text-sm mr-3">{children}</label>
      <div className="flex-1 bg-grey-3 rounded-full relative h-1">
        <div
          className="bg-violet-5 rounded-full absolute h-1 shadow"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};
export default ProgressBar;
