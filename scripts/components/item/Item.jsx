import React from 'react';
import { object } from 'prop-types';
import Carousel from '../carousel/carousel';
import { createCarouselArray } from '../../util/item-util.js';

const Item = ({ item }) => {
  const carouselArray = createCarouselArray(item);

  return (
    <div className="single-product">
      <h1>{item.title}</h1>
      <Carousel images={carouselArray} />
    </div>
  );
};

Item.propTypes = {
  item: object.isRequired
};

export default Item;
