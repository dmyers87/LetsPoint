import fservice from 'services/fservice';
import { FooterBar, HeaderBar } from 'components/Layout';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="h-screen flex flex-col">
      <HeaderBar>
        <h1 className="mt-8 mb-3 text-xl text-center text-white leading-tight">
          The meeting you are trying to join requires you to log in first
        </h1>
        <p className="mb-8 text-grey-0 text-center max-w-xs mx-auto leading-normal">
          As soon as you log in you will be redirected to the meeting and added as a participant.
        </p>

        <div className="flex flex-col items-center">
          <button
            type="button"
            className="btn btn--violet shadow-md mb-4"
            onClick={() => fservice.signInWithGoogle()}
          >
            Log in with Google
          </button>
        </div>
      </HeaderBar>
      <div className="flex-1 text-center py-8">
        <p className="leading-normal">
          Or visit the{' '}
          <Link href="/">
            <a className="text-grey-8">homepage</a>
          </Link>{' '}
          to learn more.
        </p>
      </div>
      <FooterBar />
    </main>
  );
}
