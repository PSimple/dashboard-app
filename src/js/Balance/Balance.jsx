import React from 'react';

const Balance = () => (
  <div className="medium-widgets__block medium-widgets__balance">
    <div className="block-header block-header--medium">
      <span className="widget-title">Balance</span>
      <div className="block-header__icon-wrapper">
        <button className="block-header__icon-wrapper__icon info-icon"></button>
      </div>
    </div>
    <div className="medium-widgets__balance--sum">
      $183,927
    </div>
    <div className="medium-widgets__balance--stats">
      <div className="medium-widgets__balance--column">
        Last Month
        <span className="medium-widgets__balance--stat">$120,124</span>
      </div>
      <div className="medium-widgets__balance--column">
        This Month
        <span className="medium-widgets__balance--stat">$203,890</span>
      </div>
    </div>
    <div className="medium-widgets__balance--dynamic">
      + 23,91%
    </div>
  </div>
);

export default Balance;
