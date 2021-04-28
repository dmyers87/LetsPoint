import React from 'react';
import { MeetingShape } from '../schema';
import { getObserversFromMeeting, getVotersFromMeeting } from '../services/utils';
import AvatarList from './AvatarList';
import labelCSS from './labelCSS';

type MyProps = {
  meeting: MeetingShape;
  addUserToObserverList: (id: string) => void;
  removeUserFromObserverList: (id: string) => void;
};

const EditObserverList: React.FC<MyProps> = ({
  meeting,
  addUserToObserverList,
  removeUserFromObserverList,
}) => {
  return (
    <>
      <section className="mb-3">
        <label className={labelCSS}>Voters:</label>
        <AvatarList
          userList={getVotersFromMeeting(meeting)}
          onClick={addUserToObserverList}
          imgSize="medium"
          showPlaceholder
        />
      </section>
      <section>
        <label className={labelCSS}>Observers:</label>
        <AvatarList
          userList={getObserversFromMeeting(meeting)}
          onClick={removeUserFromObserverList}
          imgSize="medium"
          showPlaceholder
        />
      </section>
    </>
  );
};

export default EditObserverList;
