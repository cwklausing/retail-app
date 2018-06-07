import React from 'react';
import { object } from 'prop-types';
import ImageSection from '../image-section/ImageSection';
import Reviews from '../reviews/Reviews';
import { createCarouselArray } from '../../util/item-util.js';
import { get } from 'lodash';
import './_item.scss';

const Item = ({ item }) => {
  const carouselArray = createCarouselArray(item);
  const reviews = get(item, 'CustomerReview[0]');
  return (
    <div className="item">
      <div className="item__left">
        <h1 className="item__title">{item.title}</h1>
        <ImageSection images={carouselArray} />
        <Reviews
          conReview={get(reviews, 'Con[0]')}
          proReview={get(reviews, 'Pro[0]')}
          overallRating={reviews.consolidatedOverallRating}
          totalReviews={reviews.totalReviews}
        />
      </div>
      <div className="item__right">
        <p className="item__price">$134</p>
      </div>
    </div>
  );
};

Item.propTypes = {
  item: object.isRequired
};

export default Item;
