import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import { NavLink } from 'react-router-dom'

import './style.less';
import logo from '../../assets/graphics/logo.svg';

const SignInForm = props => {
  return (
    <div className="card">
      <div className="formcontent">
        <img src={logo} alt="logo" height="115" width="115" />
        <h1>Sign in to ACM@UCSD</h1>
        <form onSubmit={props.handleSubmit}>
          <Form.Item className="email">
            <Input
              name="email"
              type="email"
              placeholder="Email (user@ucsd.edu)"
              className="input-box"
              value={props.values.email}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
          </Form.Item>
          <Form.Item className="password">
            <Input
              name="password"
              type="password"
              placeholder="Password"
              className="input-box"
              value={props.values.password}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
          </Form.Item>
          <NavLink to="/forgot-password">
            <p>Forgot your password?</p>
          </NavLink>
          <Form.Item className="sign-in">
            <Button type="primary" htmlType="submit" className="login-button">
              Sign In
            </Button>
          </Form.Item>
          <NavLink to="/register">
            <Button type="primary" className="register-button">
              Register for an account
            </Button>
          </NavLink>
        </form>
      </div>
    </div>
  );
};

// TODO: swap out proptypes with formik's implementation
SignInForm.propTypes = {
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  values: PropTypes.object,
};

export default SignInForm;
