import React from 'react';
import ProgressBar from 'components/ProgressBar';
import { Edit } from 'svgs';

type MyProps = {
  title: string;
  percentComplete: number;
  onEditClick: Function;
}
export default function MeetingHeader({
  title,
  percentComplete,
  onEditClick,
}: MyProps) {
  return (
    <div className="mb-6">
      <div className="flex items-start mb-6">
        <h1 className="flex-1 py-2 text-xl leading-tight border-b border-transparent">
          {title}
        </h1>
        <button
          title="Edit meeting details"
          type="button"
          className="ml-3 btn-fab btn--grey"
          onClick={() => onEditClick(v => !v)}
        >
          <Edit className="w-4 h-4" />
        </button>
      </div>

      <ProgressBar percent={percentComplete}>
        Tickets Pointed {percentComplete}%
      </ProgressBar>
    </div>
  );
}
