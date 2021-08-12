import React from 'react';

import {
  CartItemContainer,
  Image,
  ItemDetailsContainer,
  Name,
  Price,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <Image src={imageUrl} alt='item'/>
    <ItemDetailsContainer>
      <Name>{name}</Name>
      <Price>
        {quantity} x ${price.toFixed(2)}
      </Price>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
