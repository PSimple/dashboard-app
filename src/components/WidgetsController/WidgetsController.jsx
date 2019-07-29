import React, { useState, useEffect } from 'react';
import Widget from '../Widget';
import fetchData from '../../functions/fetchData';
import Checkbox from './Checkbox';
import Loader from '../Loader';
import styles from './WodgetsController.css';

const url = 'https://next.json-generator.com/api/json/get/VyJwF4-Mv';

const initialShowWidgets = {
  budget: true,
  operations: true,
  requests: true,
  progress: true,
};

const WidgetsController = () => {
  const [showWidgets, setShowWidgets] = useState(initialShowWidgets);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchData(url).then((fetchedData) => {
      setData(fetchedData);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <ul className={styles.controls}>
        {data && data.map(widget => (
          <li key={widget.type} className={styles.item}>
            <Checkbox
              label={widget.type}
              selected={showWidgets[widget.type]}
              handleChange={
                () => setShowWidgets({
                  ...showWidgets,
                  [widget.type]: !showWidgets[widget.type],
                })
              }
            />
          </li>
        ))}
      </ul>
      <div className={styles.container}>
        {loading && Object.keys(showWidgets).map(
          item => <Loader key={item} type='widget'/>,
        )}
        {data && data.map(
          widget => (
            showWidgets[widget.type] && <Widget key={widget.type} data={widget}/>
          ),
        )}
      </div>
    </>
  );
};

export default WidgetsController;
