import React from 'react';
import fservice from 'services/fservice';

import Input from 'components/Input';
import Button from './Buttons';
import ErrorBox from './ErrorBox';

const CredentialForm: React.FC<{}> = ({}) => {
  // Credential Form
  const initialState = { url: '', username: '', password: '' };
  const [values, updateValues] = React.useState(initialState);
  const [isSubmitting, updateIsSubmitting] = React.useState(false);
  const [urlValidation, updateUrlValidation] = React.useState('');
  const [error, updateError] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    updateValues(s => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const urlError = isValidURL(values.url);
    if (urlError) {
      updateUrlValidation(urlError);
      return;
    }

    updateIsSubmitting(true);

    fservice.createCredentials(values).then(
      () => {
        updateIsSubmitting(false);
        updateValues({ url: '', username: '', password: '' });
      },
      err => {
        updateIsSubmitting(false);
        if (err.code === 'permission-denied') {
          updateError('Error: Missing or insufficient permissions.');
        } else {
          console.error(err);
          updateError('Error: Something went wrong.');
        }
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      {error && <ErrorBox className="mb-3">{error}</ErrorBox>}
      <div className="mb-6">
        <Input
          type="url"
          id="url"
          label="Jira URL"
          value={values.url}
          onChange={handleChange}
          required
        />
        <div className="mb-3">
          <p className="text-sm text-grey-7 italic">ie. https://jira.company.com</p>
          {urlValidation && <ErrorBox>{urlValidation}</ErrorBox>}
        </div>
        <Input
          type="string"
          id="username"
          label="Jira Username"
          value={values.username}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          id="password"
          label="Jira Password"
          value={values.password}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit" disabled={isSubmitting}>
        Store Credentials
      </Button>
    </form>
  );
};

function isValidURL(url: string): string {
  if (url.substr(0, 'https'.length) !== 'https') return 'URL must start with https';
  if (url.substr(-1, 1) === '/') return 'No trailing slashes';

  return '';
}

export default CredentialForm;
