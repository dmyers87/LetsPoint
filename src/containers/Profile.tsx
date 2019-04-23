import React from 'react';
import { ProfileShape } from 'schema';
import fservice from 'services/fservice';

const ProfileContext = React.createContext<ProfileShape | null>(null);
export default ProfileContext;

export function ProfileProvider(props: { children: any }) {
  const [profile, setProfile] = React.useState<ProfileShape | null>(null);
  React.useEffect(() => {
    return fservice.onProfile(data => setProfile(data));
  }, []);

  return <ProfileContext.Provider value={profile} children={props.children} />;
}
