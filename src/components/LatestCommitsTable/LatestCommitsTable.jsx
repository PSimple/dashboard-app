import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { connect } from 'react-redux';
import Loader from '../Loader';
import styles from './LatestCommitsTable.css';
import { fetchLatestCommitsData } from '../../actions';


const LatestCommitsTable = ({ data, loading, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.table} id="latest-commits-table">
      {loading && <Loader type='commits'/>}
      { data && data.map(commit => (
          <ul key={commit.message} className={styles.row}>
            <li className={cn(styles.cell, styles.message)}>{commit.message}</li>
            <li className={cn(styles.cell, styles.time)}>{commit.time}</li>
            <li className={cn(styles.cell, styles['icon-arrow-right'])}>
              <a className={styles['cell-link']} href={commit.link}><i className={styles['right-arrow']}></i></a>
            </li>
          </ul>
      ))}
    </div>
  );
};

LatestCommitsTable.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  fetchData: PropTypes.func,
};

const mapStateToProps = ({ latestCommits: { data, loading } }) => ({
  data,
  loading,
});

const mapDispatchToProps = {
  fetchData: fetchLatestCommitsData,
};

export default connect(mapStateToProps, mapDispatchToProps)(LatestCommitsTable);
