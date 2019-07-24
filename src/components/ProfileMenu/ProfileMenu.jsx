import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './ProfileMenu.css';
import profilePhoto from '../../img/profile.png';

const ProfileMenu = ({ user = { name: 'Luke Brown', profilePhoto } }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button className={styles.profile} onClick={() => { setIsOpen(!isOpen); }}>
      <i className={cn(styles.arrow, { [styles.open]: isOpen })}></i>
      <span className={styles.title}>{user.name}</span>
      <img src={user.profilePhoto}></img>
    </button>
  );
};

ProfileMenu.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    profilePhoto: PropTypes.string,
  }),
};

export default ProfileMenu;
