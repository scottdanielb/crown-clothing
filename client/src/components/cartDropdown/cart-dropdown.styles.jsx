import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 350px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 73px;
  z-index: 5;
`;

export const CartItemsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const EmptyMessage = styled.span`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const Button = styled(CustomButton)`
  margin-top: 10px;
  font-size: 20px;
  font-weight: lighter;
`;
