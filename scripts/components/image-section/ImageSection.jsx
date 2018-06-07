import React, { Component, Fragment } from 'react';
import { arrayOf, string } from 'prop-types';
import Carousel from '../carousel/Carousel';
import './_image-section.scss';

export default class ImageSection extends Component {
  // to do: add more specific PropTypes.shape for incoming images
  static propTypes = {
    images: arrayOf(string)
  };

  state = {
    activeImageIndex: 0
  };

  changeActiveImage = index => {
    this.setState({
      activeImageIndex: index
    });
  };

  render = () => {
    const { images } = this.props;
    const { activeImageIndex } = this.state;

    return (
      <div className="image-section">
        {Boolean(images && images.length) && (
          <Fragment>
            <div className="primary-image">
              <img src={images[activeImageIndex]} />
            </div>
            <Carousel
              images={images}
              onClick={this.changeActiveImage}
              activeImageIndex={activeImageIndex}
            />
          </Fragment>
        )}
      </div>
    );
  };
}
