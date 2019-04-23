import React, { useContext, FunctionComponent } from 'react';
import AuthContext from 'containers/Auth';
import LoginPage from './LoginPage';

// @ts-ignore
const Gatekeeper: FunctionComponent = ({ children = null }) => {
  const auth = useContext(AuthContext);

  // Wait for info
  if (!auth.isStatusReported) return null;

  // They aren't logged in
  if (!auth.isLoggedIn) {
    return <LoginPage />;
  }

  // They are logged in
  return children;
};

export default Gatekeeper;
