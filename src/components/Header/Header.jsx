import React from 'react';
import styles from './Header.css';
import ContentWrapper from '../ContentWrapper';
import Link from '../Link';
import logo from '../../img/logo.svg';
import IconButton from '../IconButton';
import ProfileMenu from '../ProfileMenu';
import Popup from '../Popup';
import icons from '../../fixtures/popupIcons';

const Header = () => (
  <header className={styles.header}>
    <ContentWrapper flex>
      <div className={styles['left-side']}>
        <Link href='#' >
          <img src={logo}/>
        </Link>
        <IconButton type='menu-toggle' onClick={() => {}}/>
      </div>
      <div className={styles['right-side']}>
        <IconButton type='message' onClick={() => {}}/>
        <IconButton type='notification' onClick={() => {}}/>
        <IconButton data-tip type='grid' onClick={() => {}}/>
        <ProfileMenu/>
      </div>
    </ContentWrapper>
      <Popup icons={icons}/>
  </header>
);

export default Header;
