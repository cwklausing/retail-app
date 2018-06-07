import React from 'react';
import PropTypes from 'prop-types';
import './_reviews.scss';

const Reviews = ({ conReview, proReview, overallRating, totalReviews }) => {
  const starArray = ['star1', 'star2', 'star3', 'star4', 'star5'];
  const generateStars = numStars => {
    return starArray.map((value, index) => {
      return (
        <span className={`star${index < numStars ? ' red' : ''}`} key={value}>
          <svg
            preserveAspectRatio="xMidYMid meet"
            width="10px"
            height="10px"
            viewBox="0 0 100 100"
          >
            <path d="M100 10L40 198 190 78H10l150 120z" />
          </svg>
        </span>
      );
    });
  };
  const overallStars = generateStars(overallRating);
  const proStars = generateStars(proReview.overallRating);
  const conStars = generateStars(conReview.overallRating);

  return (
    <div className="reviews">
      <div className="reviews__topbar">
        <div className="stars">
          {overallStars}
          <span className="stars__text">overall</span>
        </div>
        <div className="reviews__view-all">
          {/* TODO: if only one review, make verbage singular */}
          view all {totalReviews} reviews
        </div>
      </div>
      <div className="procon">
        <div className="pro-about">
          <p className="pro-about__title">PRO</p>
          <p className="pro-about__explanation">most helpful 4-5 star review</p>
        </div>
        <div className="con-about">
          <p className="con-about__title">CON</p>
          <p className="con-about__explanation">most helpful 1-2 star review</p>
        </div>
        <hr />
        <div className="procon__reviews">
          <div className="pro-review">
            <div className="stars pro-review__stars">{proStars}</div>
            {/* TODO: make these tags more semantic w/h2/h3/h4 etc */}
            <p className="pro-review__title">{proReview.title}</p>
            <p className="pro-review__text">{proReview.review}</p>
            <div className="pro-review__about">
              <span className="pro-review__author">{proReview.screenName}</span>
              <span className="pro-date">{proReview.datePosted}</span>
            </div>
          </div>
          <div className="con-review">
            <div className="stars con-stars">{conStars}</div>
            {/* TODO: make these tags more semantic w/h2/h3/h4 etc */}
            <p className="con-title">{conReview.title}</p>
            <p className="con-text">{conReview.review}</p>
            <div className="con-review__about">
              <span className="con-review__author">{conReview.screenName}</span>
              <span className="con-date">{conReview.datePosted}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
