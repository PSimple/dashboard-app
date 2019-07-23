import React from 'react';
import styles from './Header.css';
import ContentWrapper from '../ContentWrapper';
import Link from '../Link';
import logo from '../../img/logo.svg';
import IconButton from '../IconButton';
import ProfileMenu from '../ProfileMenu';

const Header = () => (
  <header className={styles.header}>
    <ContentWrapper>
      <div className={styles['left-side']}>
        <Link href='#' >
        <img src={logo}/>
        </Link>
        <IconButton className='menu-toggle' onClick={() => {}}/>
      </div>
      <div className={styles['right-side']}>
        <IconButton className='message' onClick={() => {}}/>
        <IconButton className='notification' onClick={() => {}}/>
        <IconButton className='grid' onClick={() => {}}/>
        <ProfileMenu/>
      </div>
    </ContentWrapper>
  </header>
);

export default Header;
