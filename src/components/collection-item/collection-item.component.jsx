import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';


import {
  CollectionItemContainer,
  Image,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
  Button,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <Image style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{`$${price.toFixed(2)}`}</PriceContainer>
      </CollectionFooterContainer>
      <Button onClick={() => addItem(item)} inverted>
        ADD TO CART
      </Button>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
