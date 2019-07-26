import React from 'react';
import PropTypes from 'prop-types';
import ReactToolTip from 'react-tooltip';
import IconItem from './IconItem';
import styles from './Popup.css';

const Popup = ({ icons }) => (
  <ReactToolTip
    place='bottom'
    effect='solid'
    event='click'
    globalEventOff='click'
    className={styles.container}
    clickable={true}
  >
    {icons.map(icon => <IconItem key={icon.title} data={ icon } />)}
  </ReactToolTip>
);

Popup.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    img: PropTypes.string,
    href: PropTypes.string,
  })),
};

export default Popup;
