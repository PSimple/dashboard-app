import React from 'react';
import { Form, Field } from 'react-final-form';
import Select, { Option } from 'rc-select';
import styles from './LoginPage.css';
import { levelOptions, repositoryOptions } from './options';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(200);
  if (values.login !== 'qweqwe') {
    return { login: 'Name not found' };
  }
  return null;
};

const required = value => (value ? undefined : 'Required');

const isPasswordsMatch = (value, allValues) => (
  value === allValues ? undefined : "Don't match"
);

const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const LoginPage = () => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, values }) => (
      <form onSubmit={handleSubmit} className={styles.form}>
        <Field
          name='login'
          validate={required}
        >
          {({ input, meta }) => (
            <div className={styles.field}>
              <label className={styles.label}>Login</label>
              <input className={styles.text} {...input} placeholder='Login'/>
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
            <div className={styles.field}>
              <label className={styles.label}>Password</label>
              <input {...input} placeholder='Password' type="password"/>
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
        <Field
          name='confirm-password'
          validate={composeValidators(required, isPasswordsMatch)}
        >
          {({ input, meta }) => (
            <div className={styles.field}>
              <label className={styles.label}>Confirm password</label>
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
            <div className={styles.field}>
              <label className={styles.label}>Level</label>
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
            <div className={styles.field}>
              <label className={styles.label}>Accept politics</label>
              <input {...input}/>
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
        <div className={styles.field}>
          <label className={styles.label}>Repository</label>
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
                    <input className={styles.radio}{...input}/>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              {` ${option.value}`}
            </label>
          ))}
        </div>
        <button
          className={styles.button}
          disabled={!values.accepted || (values.accepted && !values.accepted.length)}
        >
          Submit
        </button>
      </form>
    )}
  />
);

export default LoginPage;
