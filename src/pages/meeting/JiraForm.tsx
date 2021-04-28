import React from 'react';

import parseTicketKey from '../../utils/parseJiraTicketKey';
import { PlusCircle, Loader } from '../../svgs';
import Input from '../../components/Input';
import Button from '../../components/Buttons';
import CredentialForm from '../../components/CredentialForm';
import ErrorBox from '../../components/ErrorBox';
import ProfileContext from '../../containers/Profile';

type MyProps = {
  onSubmit: (ticketID: string) => any;
};
const JiraForm: React.FC<MyProps> = ({ onSubmit }) => {
  // See if the user hasCreds
  const profile = React.useContext(ProfileContext);

  const [tid, updateTID] = React.useState('');
  const [formErrors, updateErrors] = React.useState('');
  const [isSubmitting, updateIsSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitManager();
  };

  const submitManager = async () => {
    const parsedTID = parseTicketKey(tid);
    if (parsedTID === null) {
      updateErrors('The Jira Key entered was not valid.');
      return;
    }

    updateIsSubmitting(true);
    try {
      await onSubmit(parsedTID);
      updateTID('');
      updateErrors('');
    } catch (error) {
      updateErrors(error.message);
    }

    updateIsSubmitting(false);
  };

  if (profile === null) {
    return (
      <div className="text-center text-teal-7">
        <Loader className="animate-spin w-6 h-6" />
      </div>
    );
  }

  if (!profile.hasCreds) {
    return (
      <>
        <p className="mb-3 leading-normal">
          Please enter your Jira credentials below to start importing tickets.
        </p>
        <CredentialForm />
        <div className="mb-6" />
        <p className="mb-3 leading-tight text-sm">
          Credentials are stored in a write only database for your security. These credentials are
          only transmitted directly to the Jira server over an https connection.
        </p>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      {formErrors && <ErrorBox className="mb-6">{formErrors}</ErrorBox>}
      <div className="mb-6">
        <Input
          data-lpignore="true"
          id="jira-tid"
          label="Jira Ticket Key"
          value={tid}
          onChange={e => {
            updateErrors('');
            updateTID(e.target.value);
          }}
          required
        />
        <div className="mb-3">
          <p className="text-sm text-grey-7 italic">ie. AWK-1234 or the URL to the ticket</p>
        </div>
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <Loader className="animate-spin w-5 h-5 mr-2" />
        ) : (
          <PlusCircle className="w-5 h-5 mr-2" />
        )}
        Import from Jira
      </Button>
    </form>
  );
};
export default JiraForm;
