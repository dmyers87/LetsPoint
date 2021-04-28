import React from 'react';
import Gatekeeper from '../containers/Gatekeeper';
import Link from 'next/link';
import Router from 'next/router';
import fservice from '../services/fservice';

import { ArrowLeft } from '../svgs';
import Layout from '../components/Layout';
import Button from '../components/Buttons';
import CredentialForm from '../components/CredentialForm';
import ProfileContext, { ProfileProvider } from '../containers/Profile';

export default () => (
  <Gatekeeper>
    <ProfileProvider>
      <ProfilePage />
    </ProfileProvider>
  </Gatekeeper>
);

function ProfilePage() {
  // UI State
  const [isFormVisible, setIsFormVisible] = React.useState(false);
  const profile = React.useContext(ProfileContext);

  return (
    <Layout>
      <nav className="mb-3">
        <Link href="/dashboard">
          <a className="inline-flex items-center py-2 text-teal-7 hover:text-teal-8 no-underline font-header text-base">
            <ArrowLeft className="w-6 h-6 mr-1" />
            <div>dashboard</div>
          </a>
        </Link>
      </nav>

      <h1 className="text-xl mb-6">Profile</h1>
      {profile !== null && (
        <section className="mb-6">
          <h2 className="text-lg leading-tight mb-2">Add Jira Credentials</h2>
          <p className="mb-3 leading-normal">
            Credentials are stored in a write only database for your security. These credentials are
            only transmitted directly to the Jira server over an https connection. If you are having
            trouble with the connection to Jira you may overwrite your credentials with this form.
          </p>
          {isFormVisible || !profile.hasCreds ? (
            <CredentialForm />
          ) : (
            <Button onClick={() => setIsFormVisible(true)}>Update Jira Credentials</Button>
          )}
        </section>
      )}

      <hr className="my-6 border-b border-grey-default" />

      <button
        type="button"
        className="bg-grey-1 text-grey-9 border leading-none px-4 py-3 rounded-sm w-full sm:w-1/2 md:w-1/4"
        onClick={() => fservice.signOut().then(() => Router.push('/'))}
      >
        Log out
      </button>
    </Layout>
  );
}
