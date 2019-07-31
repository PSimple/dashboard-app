import React from 'react';
import { Form, Field } from 'react-final-form';
import Select, { Option } from 'rc-select';
import styles from './LoginPage.css';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(200);
  if (values.login !== 'qweqwe') {
    return { login: 'Name not found' };
  }
  return null;
};

const levelOptions = [
  {
    value: 'junior',
    label: 'Junior',
  },
  {
    value: 'middle',
    label: 'Middle',
  },
  {
    value: 'senior',
    label: 'Senior',
  },
];

const repositoryOptions = [
  {
    value: 'github',
    label: 'Github',
  },
  {
    value: 'gitlab',
    label: 'Gitlab',
  },
  {
    value: 'gitbucket',
    label: 'Gitbucket',
  },
];

const required = value => (value ? undefined : 'Required');
const isPasswordsMatch = ({ password, 'confirm-password': confirmPassword }) => (
  password === confirmPassword ? undefined : { 'confirm-password': "Don't match" }
);

const LoginPage = () => (
  <Form
    onSubmit={onSubmit}
    validate={isPasswordsMatch}
    render={({ handleSubmit, values }) => (
      <form onSubmit={handleSubmit}>
        <Field
          name='login'
          validate={required}
        >
          {({ input, meta }) => (
            <div>
              <label>Login</label>
              <input {...input} placeholder='Login'/>
              {(meta.error || meta.submitError) && meta.touched
                && <span>{meta.error || meta.submitError}</span>
              }
            </div>
          )}
        </Field>
        <Field
          name='password'
          validate={required}
        >
          {({ input, meta }) => (
            <div>
              <label>Password</label>
              <input {...input} placeholder='Password' type="password"/>
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
        <Field
          name='confirm-password'
          validate={required}
        >
          {({ input, meta }) => (
            <div>
              <label>Confirm password</label>
              <input {...input} placeholder='Confirm-Password' type="password"/>
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
        <Field
          name='level'
          initialValue={levelOptions[0].value}
        >
          {({ input, meta }) => (
            <div>
              <label>Level</label>
              <Select className={styles.selector} {...input}>
                {levelOptions.map(option => (
                  <Option key={option.value} value={option.value}>{option.label}</Option>
                ))}
              </Select>
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
        <Field
          name='accepted'
          type='checkbox'
          value="accepted"
        >
          {({ input, meta }) => (
            <div>
              <label>Accept politics</label>
              <input {...input}/>
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
        <div>
          <label>Repository</label>
          {repositoryOptions.map(option => (
            <label key={option.value}>
              <Field
                name='repository'
                type='radio'
                value={option.value}
                initialValue={option.value === 'github' ? option.value : undefined}
              >
                {({ input, meta }) => (
                  <div>
                    <input {...input}/>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              {` ${option.value}`}
            </label>
          ))}
        </div>
        <button
          disabled={!values.accepted || (values.accepted && !values.accepted.length)}
        >
          Submit
        </button>
      </form>
    )}
  />
);

export default LoginPage;
