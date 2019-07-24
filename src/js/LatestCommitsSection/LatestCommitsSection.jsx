import React from 'react';
import LatestCommitsTable from '../LatestCommitsTable';

const LatestCommitsSection = () => (
  <div className="large-widgets__block latest-commits">
        <div className="block-header">
          <span className="widget-title">Latest Commits</span>
          <div className="block-header__icon-wrapper">
            <button className="block-header__icon-wrapper__icon refresh-icon"></button>
            <button className="block-header__icon-wrapper__icon info-icon"></button>
          </div>
        </div>
        <LatestCommitsTable />
        <a className="latest-commits__footer-link">VIEW ALL</a>
      </div>
);

export default LatestCommitsSection;
