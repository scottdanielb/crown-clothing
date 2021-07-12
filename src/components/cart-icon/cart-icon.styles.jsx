import styled from 'styled-components';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  width: 65px;
  height: 65px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIconContainer = styled(ShoppingIcon)`
  width: 34px;
  height: 34px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  bottom: 18px;
`;
