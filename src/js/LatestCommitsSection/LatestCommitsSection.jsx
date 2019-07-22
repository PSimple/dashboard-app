import React from 'react';

const LatestCommitsSection = () => (
  <div className="large-widgets__block latest-commits">
        <div className="block-header">
          <span className="widget-title">Latest Commits</span>
          <div className="block-header__icon-wrapper">
            <button className="block-header__icon-wrapper__icon refresh-icon"></button>
            <button className="block-header__icon-wrapper__icon info-icon"></button>
          </div>
        </div>
        <div className="commits-table" id="latest-commits-table">
          <ul className="commits-table__row">
            <li className="commits-table__cell commits-table__cell--message"></li>
            <li className="commits-table__cell commits-table__cell--time"></li>
            <li className="commits-table__cell commits-table__cell--icon-arrow-right"></li>
          </ul>
          <ul className="commits-table__row">
            <li className="commits-table__cell commits-table__cell--message"></li>
            <li className="commits-table__cell commits-table__cell--time"></li>
            <li className="commits-table__cell commits-table__cell--icon-arrow-right"></li>
          </ul>
          <ul className="commits-table__row">
            <li className="commits-table__cell commits-table__cell--message"></li>
            <li className="commits-table__cell commits-table__cell--time"></li>
            <li className="commits-table__cell commits-table__cell--icon-arrow-right"></li>
          </ul>
          <ul className="commits-table__row">
            <li className="commits-table__cell commits-table__cell--message"></li>
            <li className="commits-table__cell commits-table__cell--time"></li>
            <li className="commits-table__cell commits-table__cell--icon-arrow-right"></li>
          </ul>
          <ul className="commits-table__row">
            <li className="commits-table__cell commits-table__cell--message"></li>
            <li className="commits-table__cell commits-table__cell--time"></li>
            <li className="commits-table__cell commits-table__cell--icon-arrow-right"></li>
          </ul>
          <ul className="commits-table__row">
            <li className="commits-table__cell commits-table__cell--message"></li>
            <li className="commits-table__cell commits-table__cell--time"></li>
            <li className="commits-table__cell commits-table__cell--icon-arrow-right"></li>
          </ul>
          <ul className="commits-table__row">
            <li className="commits-table__cell commits-table__cell--message"></li>
            <li className="commits-table__cell commits-table__cell--time"></li>
            <li className="commits-table__cell commits-table__cell--icon-arrow-right"></li>
          </ul>
        </div>
        <a className="latest-commits__footer-link">VIEW ALL</a>
      </div>
);

export default LatestCommitsSection;
