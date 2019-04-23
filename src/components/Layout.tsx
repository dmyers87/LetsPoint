import Link from 'next/link';

const Layout: React.FC<{}> = props => (
  <main
    className="py-4 px-3 md:px-6 lg:px-8 bg-white border-l border-r m-auto max-w-lg min-h-screen"
    {...props}
  />
);
export default Layout;

export const FooterBar: React.FC<{}> = () => (
  <section className="bg-grey-9 text-grey-1">
    <div className="flex justify-center py-8 text-sm max-w-2xl mx-auto">
      <span className="mx-3">Let's Point {new Date().getFullYear()}</span>
    </div>
  </section>
);

export const HeaderBar: React.FC<{}> = ({ children }) => {
  return (
    <section className="py-4 px-3 bg-violet-5 bg-circles">
      <nav className="flex items-center max-w-2xl mx-auto">
        <Link href="/">
          <a className="inline-flex items-center font-header text-white no-underline">
            Let's Point
          </a>
        </Link>

        <button
          type="button"
          className="bg-teal-7 hover:bg-teal-8 font-bold font-header leading-none ml-auto px-3 py-2 rounded-sm shadow-md text-teal-1 hover:text-teal-2"
        >
          Sign Up
        </button>
      </nav>
      {children}
    </section>
  );
};
