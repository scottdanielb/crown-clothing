import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SigningContainer } from './signing.styles';

const SigningPage = () => (
  <SigningContainer>
    <SignIn />
    <SignUp />
  </SigningContainer>
);

export default SigningPage;
