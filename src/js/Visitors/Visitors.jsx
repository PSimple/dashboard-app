import React from 'react';

const graph = require('../../img/graph.png');

const Visitors = () => (
  <div className="medium-widgets__block medium-widgets__visitors">
    <div className="block-header block-header--medium">
      <span className="widget-title">Visitors</span>
      <div className="block-header__icon-wrapper">
        <button className="block-header__icon-wrapper__icon refresh-icon"></button>
        <button className="block-header__icon-wrapper__icon info-icon"></button>
      </div>
    </div>
    <img className="medium-widgets__visitors__image" src={graph} />
  </div>
);

export default Visitors;
