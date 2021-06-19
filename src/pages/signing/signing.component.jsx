import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './signing.styles.scss';

const SigningPage = () => (
  <div className='signing'>
    <SignIn />
    <SignUp />
  </div>
);

export default SigningPage;
