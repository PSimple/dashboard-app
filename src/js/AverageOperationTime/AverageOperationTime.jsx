import React from 'react';

const AverageOperationTime = () => (
  <div className="large-widgets__block large-widgets__aot">
    <div className="large-widgets__title">
      Average Operation Time
    </div>
    <div className="large-widgets__data">
      <div className="large-widgets__col">
        <div className="large-widgets__item large-widgets__item--read">
          <span className="large-widgets__item--label">Read</span>
          <span className="large-widgets__item--value">5.32 ms</span>
        </div>
        <div className="large-widgets__item large-widgets__item--write">
          <span className="large-widgets__item--label">Write</span>
          <span className="large-widgets__item--value">15.32 ms</span>
        </div>
      </div>
      <div className="large-widgets__col">
        <div className="large-widgets__item large-widgets__item--upload">
          <span className="large-widgets__item--label">Upload</span>
          <span className="large-widgets__item--value">5.3 gbs</span>
        </div>
        <div className="large-widgets__item large-widgets__item--download">
          <span className="large-widgets__item--label">Download</span>
          <span className="large-widgets__item--value">1.2 gbs</span>
        </div>
      </div>
    </div>
  </div>
);

export default AverageOperationTime;
