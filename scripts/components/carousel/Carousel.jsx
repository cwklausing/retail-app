import React, { Fragment } from 'react';
import { arrayOf, string, func, number } from 'prop-types';
import './_carousel.scss';

const Carousel = ({ images = [], onClick, activeImageIndex = 0 }) => {
  return (
    <div className="carousel">
      {Boolean(images[activeImageIndex - 1]) ? (
        <Fragment>
          <span
            className="arrow prev"
            onClick={() => onClick(activeImageIndex - 1)}
          />
          <img
            src={images[activeImageIndex - 1]}
            className="carousel__image"
            onClick={() => onClick(activeImageIndex - 1)}
          />
        </Fragment>
      ) : (
        <div className="empty carousel__image" />
      )}
      <img src={images[activeImageIndex]} className="carousel__image active" />
      {Boolean(images[activeImageIndex + 1]) ? (
        <Fragment>
          <img
            src={images[activeImageIndex + 1]}
            className="carousel__image"
            onClick={() => onClick(activeImageIndex + 1)}
          />
          <span
            className="arrow next"
            onClick={() => onClick(activeImageIndex + 1)}
          />
        </Fragment>
      ) : (
        <div className="empty carousel__image" />
      )}
    </div>
  );
};

Carousel.propTypes = {
  images: arrayOf(string),
  onClick: func,
  activeImageIndex: number
};

export default Carousel;
