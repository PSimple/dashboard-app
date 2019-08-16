import React, { useEffect, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Widget from '../Widget';
import Checkbox from './Checkbox';
import Loader from '../Loader';
import styles from './WodgetsController.css';
import fetchComponentData from '../../actions';
import WidgetsStore from '../../store';

const WidgetsController = observer(({
  data, loading, fetchData,
}) => {
  const { showWidgets, setShowWidget } = useContext(WidgetsStore);
  console.log(showWidgets);

  useEffect(() => {
    fetchData('widgets');
  }, []);

  return (
    <>
      <ul className={styles.controls}>
        {data && data.map(widget => (
          <li key={widget.type} className={styles.item}>
            <Checkbox
              label={widget.type}
              selected={showWidgets[widget.type]}
              handleChange={() => setShowWidget(widget.type, !showWidgets[widget.type])}
            />
          </li>
        ))}
      </ul>
      <div className={styles.container}>
        {loading && Object.keys(showWidgets).map(
          item => <Loader key={item} type='widget' />,
        )}
        {data && data.map(
          widget => (
            showWidgets[widget.type] && <Widget key={widget.type} data={widget} />
          ),
        )}
      </div>
    </>
  );
});

WidgetsController.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  fetchData: PropTypes.func,
};

const mapStateToProps = ({
  fetchReducer: {
    widgets: { data, loading },
  },
}) => ({ data, loading });


const mapDispatchToProps = {
  fetchData: fetchComponentData,
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetsController);
