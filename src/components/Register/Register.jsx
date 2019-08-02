import React from 'react';
import { Form, Field } from 'react-final-form';
import '@babel/plugin-transform-runtime';
import Select, { Option } from 'rc-select';
import PropTypes from 'prop-types';
import styles from './Register.css';
import 'rc-select/assets/index.css';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const usernameAvailable = async (value) => {
  await sleep(400);
  if (['mike', 'pavel', 'kostya', 'maksim', 'anton'].includes(value && value.toLowerCase())) {
    return 'Username taken!';
  }
  return null;
};

const repositoryList = [
  {
    value: 'bitbucket',
  },
  {
    value: 'github',
  },
  {
    value: 'gitlab',
  },
];

const levelsList = [
  {
    value: 'Junior',
  },
  {
    value: 'Middle',
  },
  {
    value: 'Senior',
  },
];

const Register = () => (
  <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.username) {
          errors.username = 'Required';
        }
        if (!values.password) {
          errors.password = 'Required';
        }
        if (!values.confirm) {
          errors.confirm = 'Required';
        } else if (values.confirm !== values.password) {
          errors.confirm = 'Must match';
        }
        if (!values.check) {
          errors.check = 'Required';
        }
        if (!values.select) {
          errors.select = 'Required';
        }
        return errors;
      }}
      render={({
        handleSubmit, values,
      }) => (
        <form
          onSubmit={handleSubmit}
          className={styles.register}
        >
          <Field name="username"validate={usernameAvailable}>
            {({ input, meta }) => (
              <div className={styles.row}>
                <label className={styles.label}>Username</label>
                <input {...input} className={styles.input} type="text" placeholder="Username" />
                {meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="password">
            {({ input, meta }) => (
              <div className={styles.row}>
                <label className={styles.label}>Password</label>
                <input {...input} className={styles.input} type="password" placeholder="Password" />
                {meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="confirm">
            {({ input, meta }) => (
              <div className={styles.row}>
                <label className={styles.label}>Confirm</label>
                <input {...input} className={styles.input} type="password" placeholder="Confirm" />
                {meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="select"
            initialValue={levelsList[0] && levelsList[0].value}
          >
            {({ input, meta }) => (
              <div className={styles.row}>
                <label className={styles.label}>Select</label>
                <Select
                  style={{ width: 365 }}
                  {...input}
                  className={styles['rc-select']}>
                  {levelsList.map(option => (
                    <Option key={option.value} value={option.value}>{option.value}</Option>
                  ))
                  }
                </Select>
                {meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div className={styles.row}>
            <label className={styles.label}>Repository</label>
            {repositoryList.map(option => (
                <div key={option.value} className={styles['radio-item']}>
                  <Field
                    name='repository'
                    type='radio'
                    value={option.value}
                    initialValue='github'
                  >
                    {({ input, meta }) => (
                      <>
                        <input {...input} className={styles.radio}/>
                        {meta.error && meta.touched
                          && <span className={styles.error}>{meta.error}</span>
                          }
                      </>
                    )}
                  </Field>
                  {` ${option.value}`}
                </div>
            ))}
          </div>
          <Field name="check" type='checkbox' initialValue={false}>
            {({ input, meta }) => (
              <div className={styles.row}>
                <label className={styles.label}>Check</label>
                <input {...input} className={styles.checkbox} />
                {meta.error && meta.touched && <span className={styles.error}>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div className={styles.buttons}>
            <button type="submit" className={styles.button} disabled={!values.check}>
              Submit
            </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
);

Register.propTypes = {
  input: PropTypes.element,
};

export default Register;
