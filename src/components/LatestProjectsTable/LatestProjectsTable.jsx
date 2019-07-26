import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import fetchData from '../../functions/fetchData';
import styles from './LatestProjectsTable.css';

const jsonUrl = 'https://next.json-generator.com/api/json/get/4yPpwUB-P';
const statuses = {
  0: 'Canceled',
  1: 'Started',
  2: 'Pending',
  3: 'Completed',
};

const LatestProjectsTable = ({ image }) => {
  const [projectsList, setProjectsList] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetchData(jsonUrl).then((data) => {
      setProjectsList(data);
      setLoader(false);
    });
  }, []);
  return (
    <div className={styles.table}>
      <ul className={styles.head}>
        <li className={styles.cell}>Name</li>
        <li className={styles.cell}>Project</li>
        <li className={styles.cell}>Start Date</li>
        <li className={styles.cell}>End Date</li>
        <li className={styles.cell}>Status</li>
      </ul>
      {loader && <div className={cn(styles.row, styles.loading)} />}
      { projectsList && projectsList.map((project) => {
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
  );
};

export default LatestProjectsTable;
