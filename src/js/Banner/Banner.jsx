import React from 'react';

const blogImage = require('../../img/blog_image.svg');

const Banner = () => (
  <div className="medium-widgets__block medium-widgets__banner">
    <span className="medium-widgets__banner__header">FROM OUR BLOG</span>
    <span className="medium-widgets__banner__title">Urgent ! We Updated Our ToS</span>
    <span className="medium-widgets__banner__text">Hello, we just updated our tos ..</span>
    <span className="medium-widgets__banner__link">READ MORE</span>
    <img src={blogImage} className="medium-widgets__banner__image" />
  </div>
);

export default Banner;
