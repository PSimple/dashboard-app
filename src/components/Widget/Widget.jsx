import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Widget.css';
import Badge from './Badge';
import ProgressBar from './ProgressBar';

const types = {
  budget: 'budget',
  operations: 'operations',
  requests: 'requests',
  progress: 'progress',
};

const prepareBigNumbers = value => value.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g).join();

const Widget = ({ data }) => {
  const { value, percents, type } = data;

  return (
    <div className={cn(styles.item, styles[type])}>
      <span className={styles.title}>{type}</span>
      <div>
        <span className={styles.value}>
          {type === types.budget && '$'}
          {prepareBigNumbers(value)}
          {type === types.progress && '%'}
        </span>
        {!!percents && <Badge>{percents}</Badge>}
        {type === types.progress && <ProgressBar>{value}</ProgressBar>}
      </div>
    </div>
  );
};

Widget.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.string,
      value: PropTypes.number,
      percents: PropTypes.number,
    }),
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ]),
};

export default Widget;
