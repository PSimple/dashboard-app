import React from 'react';
import { Form, Field } from 'react-final-form';
import '@babel/plugin-transform-runtime';
import Select, { Option } from 'rc-select';
import PropTypes from 'prop-types';
import './Register.css';
import 'rc-select/assets/index.css';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const usernameAvailable = async (value) => {
  await sleep(400);
  if (~['mike', 'pavel', 'kostya', 'maksim', 'anton'].indexOf(value && value.toLowerCase())) {
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
        <form onSubmit={handleSubmit}>
          <Field name="username" validate={usernameAvailable}>
            {({ input, meta }) => (
              <div>
                <label>Username</label>
                <input {...input} type="text" placeholder="Username" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="password">
            {({ input, meta }) => (
              <div>
                <label>Password</label>
                <input {...input} type="password" placeholder="Password" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="confirm">
            {({ input, meta }) => (
              <div>
                <label>Confirm</label>
                <input {...input} type="password" placeholder="Confirm" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="select"
            initialValue={levelsList[0] && levelsList[0].value}
          >
            {({ input, meta }) => (
              <div>
                <label>Select</label>
                <Select
                  style={{ width: 365 }}
                  {...input}>
                  {levelsList.map(option => (
                    <Option key={option.value} value={option.value}>{option.value}</Option>
                  ))
                  }
                </Select>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div>
            <label>Repository</label>
            {repositoryList.map(option => (
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
          <Field name="check" type='checkbox' initialValue={false}>
            {({ input, meta }) => (
              <div>
                <label>Check</label>
                <input {...input} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div className="buttons">
            <button type="submit" disabled={!values.check}>
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
