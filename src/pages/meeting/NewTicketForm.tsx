import React from 'react';
import { TicketNew } from '../../schema';

import Input from '../../components/Input';

type MyProps = {
  ticket?: TicketNew;
  onSubmit: (ticket: TicketNew, { resetForm }: { resetForm: any }) => void;
  formButtons: React.ReactNode;
};

const TicketForm: React.FunctionComponent<MyProps> = ({ formButtons, onSubmit, ticket }) => {
  const emptyState: TicketNew = { title: '', link: '', description: '', source: 'form' };
  const initialState = ticket || emptyState;
  const [newTicket, updateTicket] = React.useState<TicketNew>(initialState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    updateTicket(s => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ('' === newTicket.title.trim()) return;
    onSubmit(newTicket, { resetForm: () => updateTicket(emptyState) });
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="mb-6">
        <Input
          id="ticket__title"
          name="title"
          label="Title"
          value={newTicket.title}
          onChange={onChange}
          required
        />
        <Input
          id="ticket__link"
          name="link"
          label="Link"
          value={newTicket.link}
          onChange={onChange}
          type="url"
        />
        <Input
          id="ticket__description"
          name="description"
          label="Description"
          value={newTicket.description}
          onChange={onChange}
        />
      </div>

      {formButtons}
    </form>
  );
};

export default TicketForm;
