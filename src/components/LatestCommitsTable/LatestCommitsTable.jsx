import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cn from 'classnames';
import styles from './LatestCommitsTable.css';

const jsonUrl = 'https://next.json-generator.com/api/json/get/EyfChEW-v';

const fetchData = async (url) => {
  try {
    const {
      data,
    } = await axios.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};

const LatestCommitsTable = () => {
  const [commitsList, setCommitsList] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetchData(jsonUrl).then((data) => {
      setCommitsList(data);
      setLoader(false);
    });
  }, []);
  return (
    <div className={styles.table} id="latest-commits-table">
      {loader && <div className={cn(styles.row, styles.loading)}></div>}
      { commitsList && commitsList.map(commit => (
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

export default LatestCommitsTable;
