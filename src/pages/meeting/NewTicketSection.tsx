import React from 'react';
import cx from 'classnames';

import fservice from 'services/fservice';
import TicketForm from './NewTicketForm';
import JiraForm from './JiraForm';
import Button from 'components/Buttons';
import { PlusCircle } from 'svgs';

type MyProps = {
  mid: string;
  className?: string;
};

const NewTicketSection: React.FC<MyProps> = ({ mid, className }) => {
  const [visibleForm, updateVisibleForm] = React.useState<'form' | 'jira-tid'>('form');

  return (
    <section className={className}>
      <div className="flex items-baseline mb-3">
        <h1 className="text-lg mr-2">Add a ticket: </h1>
        <Tab isActive={visibleForm === 'form'} onClick={() => updateVisibleForm('form')}>
          Form
        </Tab>
        <Tab isActive={visibleForm === 'jira-tid'} onClick={() => updateVisibleForm('jira-tid')}>
          Jira
        </Tab>
      </div>

      {visibleForm === 'form' && (
        <TicketForm
          onSubmit={(newTicket, { resetForm }) =>
            fservice.createTicket(mid, newTicket).then(() => {
              resetForm();
            })
          }
          formButtons={
            <Button type="submit">
              <PlusCircle className="w-5 h-5 mr-2" />
              Add Ticket
            </Button>
          }
        />
      )}
      {visibleForm === 'jira-tid' && (
        <JiraForm onSubmit={tid => fservice.importTicketFromJiraTID(mid, tid)} />
      )}
    </section>
  );
};
export default NewTicketSection;

const Tab: React.FC<{ isActive: boolean; onClick: () => any }> = ({
  isActive,
  children,
  onClick,
}) => {
  return (
    <button
      className={cx({
        'px-6 py-2 border-b-2': true,
        'border-violet-5 cursor-default': isActive,
        'border-transparent hover:border-violet-5': !isActive,
      })}
      type="button"
      onClick={() => !isActive && onClick()}
    >
      {children}
    </button>
  );
};
