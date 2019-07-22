import React from 'react';

const scoreChart = require('../../img/score_chart.png');

const Score = () => (
  <div className="medium-widgets__block medium-widgets__score">
    <div className="block-header block-header--medium">
      <span className="widget-title">Score</span>
    </div>
    <div className="medium-widgets__score__dynamic medium-widgets__score__dynamic--grow"><i
        className="dynamic-icon dynamic-icon--grow"></i>+12pts</div>
    <div className="medium-widgets__score__period">THIS WEEK</div>
    <img className="medium-widgets__score__image" src={scoreChart} />
  </div>
);

export default Score;
