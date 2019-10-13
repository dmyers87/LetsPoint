import React, { useRef, useState, useEffect } from 'react';
import cx from 'classnames';
import fservice from 'services/fservice';
import useMeeting from 'hooks/useMeeting';
import { Save } from 'svgs';
import EditObserverList from './EditObserverList';

type MyProps = {
  mid: string;
  setEditStatus: Function;
};
export default function EditMeetingForm({
  mid,
  setEditStatus,
}: MyProps) {
  const { meeting, updateMeeting } = useMeeting(mid);

  // Edit Form
  const [formTitle, updateFormTitle] = useState(meeting.title);
  useEffect(() => updateFormTitle(meeting.title), [meeting]);

  // Validate, update meeting and exit edit mode
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formTitle.trim() === '') {
      // add error
      return;
    }

    if (formTitle.trim() !== meeting.title) {
      // Optimistically update our state to avoid a flash
      updateMeeting(s => ({ ...s, title: formTitle }));
      fservice.updateMeeting({ title: formTitle, id: meeting.id });
    }
    setEditStatus(false);
  };

  // Reset form fields, and exit edit mode
  const handleReset = () => {
    setEditStatus(false);
    updateFormTitle(meeting.title);
  };

  return (
    <>
      <form className="flex items-start mb-6" onSubmit={handleSubmit} autoComplete="off">
        <input
          autoFocus
          required
          className={cx(
            'flex-1 font-header text-xl leading-tight',
            'py-2 block w-full placeholder:text-grey-8',
            'border-b border-gray-3',
            'outline-none focus:border-teal-7'
          )}
          placeholder="Meeting title"
          value={formTitle}
          onChange={e => updateFormTitle(e.target.value)}
          onKeyDown={e => e.key === 'Escape' && handleReset()}
        />
        <button type="submit" className="ml-3 btn btn--violet">
          <Save className="w-4 h-4 mr-3" />
          Save
        </button>
      </form>
      <section className="mb-6">
        <h1 className="text-lg mb-2">Move users between roles</h1>
        <EditObserverList
          meeting={meeting}
          addUserToObserverList={anyUID => fservice.addUserToObserverList(mid, anyUID)}
          removeUserFromObserverList={anyUID =>
            fservice.removeUserFromObserverList(mid, anyUID)
          }
        />
      </section>
    </>
  );
}