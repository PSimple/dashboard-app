import React, { useEffect } from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import styles from './LatestProjectsTable.css';
import { fetchProjectsData } from '../../actions';

const statuses = {
  0: 'Canceled',
  1: 'Started',
  2: 'Pending',
  3: 'Completed',
};

const LatestProjectsTable = ({
  image,
  data,
  loading,
  fetchData,
}) => {
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <Loader type='projects'/>
    );
  }
  return (
    <>
      <div className={styles.table}>
        <ul className={styles.head}>
          <li className={styles.cell}>Name</li>
          <li className={styles.cell}>Project</li>
          <li className={styles.cell}>Start Date</li>
          <li className={styles.cell}>End Date</li>
          <li className={styles.cell}>Status</li>
        </ul>
      {data.map((project) => {
        const statusText = statuses[project.status];
        return (
          <ul key={project.name} className={styles.row}>
            <li className={styles.cell}>
              <span className={styles.author}>
                <img src={image} className={styles.profile}/>
                {project.name}
              </span>
            </li>
            <li className={styles.cell}>{project.project}</li>
            <li className={styles.cell}>{project.startDate}</li>
            <li className={styles.cell}>{project.endDate}</li>
            <li className={cn(styles.cell, styles[statusText.toLowerCase()])}>{statusText}</li>
          </ul>
        );
      })}
    </div>
  </>
  );
};

LatestProjectsTable.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  fetchData: PropTypes.func,
  image: PropTypes.string,
};

const mapStateToProps = ({ projects: { data, loading } }) => ({
  data,
  loading,
});

const mapDispatchToProps = {
  fetchData: fetchProjectsData,
};

export default connect(mapStateToProps, mapDispatchToProps)(LatestProjectsTable);
