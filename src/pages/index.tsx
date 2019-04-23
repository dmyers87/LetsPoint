import React, { useContext } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import fservice from 'services/fservice';
import AuthContext from 'containers/Auth';
import { Zap as ZapIcon, PlusCircle as PlusCircleIcon } from 'svgs';
import { HeaderBar, FooterBar } from 'components/Layout';

export default function() {
  const auth = useContext(AuthContext);
  const toDash = () => Router.push('/dashboard');

  const loginWithGoogle = () => {
    auth.isLoggedIn ? toDash() : fservice.signInWithGoogle().then(toDash, err => console.log(err));
  };

  return (
    <main>
      <HeaderBar>
        <>
          <h1 className="mt-8 mb-3 text-xl text-center leading-tight text-white">
            Let's make pointing sessions efficient
          </h1>
          <p className="mb-12 text-grey-0 text-center leading-normal max-w-xs mx-auto">
            Cut down on wasted time in meetings by queueing tickets and pointing asynchronously
          </p>

          <div className="flex flex-col items-center">
            <button type="button" className="btn btn--violet shadow-md" onClick={loginWithGoogle}>
              Log in with Google
            </button>
          </div>
          <div className="h-16 flex items-center justify-center">
            {auth.isLoggedIn && (
              <Link href="/dashboard">
                <a className="text-white">Your Dashboard</a>
              </Link>
            )}
          </div>
        </>
      </HeaderBar>

      <section className="py-8 px-8 bg-grey-0">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl mb-3 leading-tight">Baked in efficiency</h2>
          <StepList
            items={[
              'Create meetings with ease',
              'Import tickets, or create one-offs',
              'Review the queue with stakeholders',
              'Invite participants by sharing a link',
              'Have participants start pointing on their own time',
              'Come together as a team to finish off any discussion, and reach consensus',
              'Push a point value back into Jira',
            ]}
          />
        </div>
      </section>

      <section className="py-8 px-8 bg-grey-2">
        <div className="max-w-2xl mx-auto">
          <BoxList
            items={[
              <BoxContent
                Icon={ZapIcon}
                title="Real Time"
                text="Real time meetings; votes, users, added and removed tickets"
              />,
              <BoxContent
                Icon={ZapIcon}
                title="Easy Meeting Invitations"
                text="Invite participants to meetings by sharing a link"
              />,
              <BoxContent
                Icon={PlusCircleIcon}
                title="Jira Integration"
                text="Pull tickets in from Jira, then push points back"
              />,
            ]}
          />
        </div>
      </section>
      <FooterBar />
    </main>
  );
}

const BoxList: React.FC<{ items: React.ReactElement<any>[] }> = ({ items }) => {
  return (
    <ul className="list-reset flex flex-wrap justify-center items-stretch -mx-2">
      {items.map((item, i) => (
        <li key={i} className="px-2 mb-4 w-full md:w-1/2 lg:w-1/3">
          <div className="h-full px-6 py-8 bg-white shadow ">{item}</div>
        </li>
      ))}
    </ul>
  );
};
const BoxContent: React.FC<{ title: string; Icon: React.FC<any>; text: string }> = ({
  title,
  Icon,
  text,
}) => {
  return (
    <>
      <div className="text-lg flex items-center justify-center mb-6 leading-tight">
        <Icon className="w-6 h-6 mr-2" /> {title}
      </div>
      <p className="text-grey-7 leading-normal">{text}</p>
    </>
  );
};

const StepList: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <ol className="list-reset">
      {items.map((item, i) => (
        <li key={i} className="mb-4 flex items-start">
          <span className="w-8 h-8 rounded-full flex-no-shrink text-center bg-white border font-extrabold font-header mr-2 p-2 -mt-2 shadow text-sm">
            {i + 1}
          </span>
          <span className="leading-tight">{item}</span>
        </li>
      ))}
    </ol>
  );
};
