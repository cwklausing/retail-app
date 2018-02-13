import React from 'react';
import { object } from 'prop-types';
import ImageSection from '../image-section/ImageSection';
import { createCarouselArray } from '../../util/item-util.js';

const Item = ({ item }) => {
  const carouselArray = createCarouselArray(item);

  return (
    <div className="single-product">
      <h1>{item.title}</h1>
      <ImageSection images={carouselArray} />
    </div>
  );
};

Item.propTypes = {
  item: object.isRequired
};

export default Item;
