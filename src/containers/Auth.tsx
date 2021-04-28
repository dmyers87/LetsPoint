import React, { useState, useEffect } from 'react';
import fservice from '../services/fservice';

export type AuthShape = {
  isStatusReported: boolean;
  isLoggedIn: boolean;
  user: {
    displayName: string;
    email: string;
    photoURL: string;
    uid: string;
  };
};

const AuthState: AuthShape = {
  isStatusReported: false,
  isLoggedIn: false,
  user: {
    displayName: '',
    email: '',
    photoURL: '',
    uid: '',
  },
};

const AuthContext = React.createContext(AuthState);
export default AuthContext;

export function AuthProvider(props: { children: any }) {
  const [state, setState] = useState<AuthShape>(AuthState);

  useEffect(
    () =>
      fservice.auth.onAuthStateChanged(user => {
        if (user) {
          setState({
            isStatusReported: true,
            isLoggedIn: true,
            user: {
              displayName: user.displayName || '',
              email: user.email || '',
              photoURL: user.photoURL || '',
              uid: user.uid,
            },
          });
        } else {
          setState({
            isStatusReported: true,
            isLoggedIn: false,
            user: { ...AuthState.user },
          });
        }
      }),
    [] // Never re-run this effect
  );

  return <AuthContext.Provider value={state} children={props.children} />;
}
