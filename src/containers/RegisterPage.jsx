import React from 'react';
import LoginLayout from '../components/LoginLayout';
import RegisterForm from '../containers/RegisterForm';

const RegisterPage = () => {
  return (
    <LoginLayout>
      <RegisterForm />
    </LoginLayout>
  );
};

export default RegisterPage;
