import React, { Component, Fragment } from 'react';
import { arrayOf, string } from 'prop-types';
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
            <div className="carousel">
              {Boolean(images[activeImageIndex - 1]) ? (
                <Fragment>
                  <span
                    className="arrow prev"
                    onClick={() => this.changeActiveImage(activeImageIndex - 1)}
                  />
                  <img
                    src={images[activeImageIndex - 1]}
                    className="carousel__image"
                    onClick={() => this.changeActiveImage(activeImageIndex - 1)}
                  />
                </Fragment>
              ) : (
                <div className="empty carousel__image" />
              )}
              <img
                src={images[activeImageIndex]}
                className="carousel__image active"
              />
              {Boolean(images[activeImageIndex + 1]) ? (
                <Fragment>
                  {' '}
                  <img
                    src={images[activeImageIndex + 1]}
                    className="carousel__image"
                    onClick={() => this.changeActiveImage(activeImageIndex + 1)}
                  />
                  <span
                    className="arrow next"
                    onClick={() => this.changeActiveImage(activeImageIndex + 1)}
                  />
                </Fragment>
              ) : (
                <div className="empty carousel__image" />
              )}
            </div>
          </Fragment>
        )}
      </div>
    );
  };
}
