import { PlusCircle as PlusCircleIcon, Zap as ZapIcon } from '../../svgs';

const MeetingIntroAlert = () => (
  <section className="text-teal-9 bg-teal-2 border-teal-6 border-t border-b py-5 px-4 mb-6">
    <h1 className="leading-tight pb-3 text-teal-8">What to know before getting started</h1>

    <ul className="list-reset text-sm">
      <li className="mb-2">
        Invite participants by sharing a link to this page
      </li>
      <li className="mb-2">
        <PlusCircleIcon className="w-4 h-4 mr-2 align-text-bottom" />
        Add tickets to the meeting with the form below
      </li>
      <li className="">
        <ZapIcon className="w-4 h-4 mr-2 align-text-bottom" />
        The meeting is in real time; votes, adding tickets, revealing tickets, etc.
      </li>
    </ul>
  </section>
);

export default MeetingIntroAlert;
