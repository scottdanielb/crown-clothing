import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cartDropdown.styles.scss';

const CartDropdown = () => (
  <div className='cartDropdown'>
    <div className='cart-items' />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
