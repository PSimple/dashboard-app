import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div className="commits-table" id="latest-commits-table">
      {loader && <div className="commits-table__row commits-table__row--loading"></div>}
      { commitsList && commitsList.map((commit) => {
        return (
          <ul key={commit.message} className="commits-table__row">
            <li className="commits-table__cell commits-table__cell--message">{commit.message}</li>
            <li className="commits-table__cell commits-table__cell--time">{commit.time}</li>
            <li className="commits-table__cell commits-table__cell--icon-arrow-right">
              <a className="cell-link" href={commit.link}><i className="right-arrow"></i></a>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default LatestCommitsTable;
