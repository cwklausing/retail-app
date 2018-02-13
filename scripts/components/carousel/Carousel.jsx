import React, { Component, Fragment } from 'react';
import { arrayOf, string } from 'prop-types';
import './_carousel.scss';

export default class Carousel extends Component {
  // to do: add more specific PropTypes.shape for incoming images
  static propTypes = {
    images: arrayOf(string)
  };

  state = {
    activeImageIndex: 0
  };

  render = () => {
    const { images } = this.props;
    const { activeImageIndex } = this.state;
    console.log(images);
    return (
      <div className="image-section">
        {Boolean(images && images.length) && (
          <Fragment>
            <div className="primary-image">
              <img src={images[activeImageIndex]} />
            </div>
            <div className="image-carousel">
              {images.map((image, index) => {
                return (
                  // I'm making the (currently false) assumption that all image urls should be unique
                  <img
                    src={image}
                    key={image}
                    className={`${index === activeImageIndex ? 'active' : ''}`}
                  />
                );
              })}
            </div>
          </Fragment>
        )}
      </div>
    );
  };
}
