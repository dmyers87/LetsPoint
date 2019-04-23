import React, { useState, useEffect, useContext } from 'react';
import Router from 'next/router';
import cx from 'classnames';
import fservice from 'services/fservice';
import { MeetingShape } from 'schema';

import Gatekeeper from 'containers/Gatekeeper';
import Layout from 'components/Layout';
import Input from 'components/Input';
import Button from 'components/Buttons';
import Link from 'next/link';
import AuthContext from 'containers/Auth';
import AvatarImg from 'components/AvatarImg';
import AvatarList from 'components/AvatarList';
import MoreDropdown from 'components/MoreDropdown';

import { getParticipantsFromMeeting } from 'services/utils';

import { Unarchive, Archive, Loader } from 'svgs';
import ToggleButton from 'components/ToggleButton';

export default () => (
  <Gatekeeper>
    <DashboardPage />
  </Gatekeeper>
);

function DashboardPage() {
  const userState = useContext(AuthContext);

  const [uiMode, updateUIMode] = React.useState<'active' | 'archived'>('active');

  // New meeting form
  const [newMeetingTitle, setNewMeetingTitle] = useState('');
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newMeetingTitle.trim()) return;

    fservice.createMeeting({ title: newMeetingTitle }).then(val => {
      Router.push(`/meeting?mid=${val.id}`);
    });
  };

  // Fetch all meetings, with live updates
  const [isLoading, updateIsLoading] = useState(true);
  const [meetings, setMeetings] = useState<MeetingShape[]>([]);
  useEffect(() => {
    updateIsLoading(true);
    setMeetings([]);

    let listener = () => {};
    if (uiMode === 'active') {
      listener = fservice.onMeetingList(meetingsData => {
        updateIsLoading(false);
        setMeetings(meetingsData);
      });
    } else {
      fservice.getArchivedMeetingList().then(meetingData => {
        updateIsLoading(false);
        setMeetings(meetingData);
      });
    }

    return listener;
  }, [uiMode]);

  return (
    <Layout>
      <nav className="flex items-center mb-6">
        <h1 className="text-xl">Let's Point</h1>

        <Link href="/profile">
          <a className="ml-auto">
            <AvatarImg className="w-10 h-10" src={userState.user.photoURL} alt="Your avatar" />
          </a>
        </Link>
      </nav>

      <Header
        title="Meetings"
        count={isLoading ? '\u00A0' : meetings.length.toString()}
        toggleChecked={uiMode === 'archived'}
        onToggle={() => {
          updateUIMode(s => (s === 'active' ? 'archived' : 'active'));
          updateIsLoading(true);
        }}
      />

      {/* Active Meetings */}
      {uiMode === 'active' && !isLoading && (
        <>
          {meetings.map(m => (
            <MeetingCard key={m.id} m={m} />
          ))}

          <section className="mb-6">
            <h1 className="text-lg mb-2">Start a new meeting</h1>

            <form onSubmit={onSubmit} autoComplete="off">
              <Input
                id="title"
                label="Title"
                value={newMeetingTitle}
                onChange={e => setNewMeetingTitle(e.target.value)}
              />

              <Button type="submit">Schedule meeting</Button>
            </form>
          </section>
        </>
      )}

      {/* Archived Meetings */}
      {uiMode === 'archived' &&
        !isLoading &&
        meetings.map(m => (
          <ArchivedMeetingCard key={m.id} m={m} afterUnArchive={() => updateUIMode('active')} />
        ))}
    </Layout>
  );
}

const Header: React.FC<{
  title: string;
  count: string;
  toggleChecked: boolean;
  onToggle: () => void;
}> = ({ title, count, toggleChecked, onToggle }) => (
  <header className="flex items-center mb-6">
    <h1 className="text-lg">{title}</h1>

    <span
      style={{ fontVariantNumeric: 'tabular-nums' }}
      className={cx(
        'ml-2',
        'px-3 py-1',
        'text-sm border-2 rounded-full',
        'text-teal-1 bg-teal-7 border-teal-2'
      )}
    >
      {count}
    </span>

    <ToggleButton className="ml-auto" label="Archive" onChange={onToggle} checked={toggleChecked} />
  </header>
);

const MeetingCard: React.FC<{ m: MeetingShape }> = ({ m }) => {
  const [showSpinner, updateShowSpinner] = React.useState(false);

  return (
    <article className="px-6 py-4 mb-6 shadow rounded-sm border-l-6 border-teal-7">
      <header className="flex items-start mb-2">
        <h1 className="flex-1">
          <Link href={`/meeting?mid=${m.id}`}>
            <a className="text-violet-9 no-underline">{m.title}</a>
          </Link>
        </h1>
        <MoreDropdown className="-mt-2 ml-3 -mr-3">
          {showSpinner && (
            <div className="text-center text-teal-7">
              <Loader className="animate-spin w-6 h-6" />
            </div>
          )}
          {!showSpinner && (
            <button
              type="button"
              className={cx('flex w-full text-left', 'px-6 py-2', 'hover:bg-grey-1')}
              onClick={() => {
                updateShowSpinner(true);
                fservice.archiveMeeting(m.id, 'archive');
              }}
            >
              <Archive className="w-4 h-4 mr-6" />
              <span className="flex-1">Archive</span>
            </button>
          )}
        </MoreDropdown>
      </header>

      <AvatarList userList={getParticipantsFromMeeting(m)} />
    </article>
  );
};

const ArchivedMeetingCard: React.FC<{ m: MeetingShape; afterUnArchive: () => void }> = ({
  m,
  afterUnArchive,
}) => {
  const [showSpinner, updateShowSpinner] = React.useState(false);

  return (
    <article className="px-6 py-4 mb-6 shadow rounded-sm border-l-6 border-cyan-6">
      <header className="flex items-start mb-2">
        <h1 className="flex-1">{m.title}</h1>
        <button
          type="button"
          className="btn btn--violet btn--sm"
          onClick={() => {
            updateShowSpinner(true);
            fservice.archiveMeeting(m.id, 'active').then(afterUnArchive);
          }}
        >
          {showSpinner ? (
            <Loader className="animate-spin w-6 h-6" />
          ) : (
            <>
              <Unarchive className="w-4 h-4 mr-2" />
              <span className="flex-1">Unarchive</span>
            </>
          )}
        </button>
      </header>

      <AvatarList userList={getParticipantsFromMeeting(m)} />
    </article>
  );
};
