import React from 'react';

const dataCenters = require('../../img/data_centers.svg');

const DataCenters = () => (
  <div className="large-widgets__block large-widgets__data-centers">
    <div className="block-header block-header--medium">
      <span className="widget-title">Data Centers</span>
      <div className="block-header__icon-wrapper">
        <button className="block-header__icon-wrapper__icon refresh-icon"></button>
        <button className="block-header__icon-wrapper__icon info-icon"></button>
      </div>
    </div>
    <img src={dataCenters} className="large-widgets__data-centers__image" />
  </div>
);

export default DataCenters;
