import React from 'react';
import styles from './Banner.css';
import Link from '../Link';

import blogImage from '../../img/blog_image.svg';

const Banner = () => (
  <div className={styles.container}>
    <span className={styles.header}>FROM OUR BLOG</span>
    <span className={styles.title}>Urgent ! We Updated Our ToS</span>
    <span className={styles.text}>Hello, we just updated our tos ..</span>
    <Link href="#" className='read-more'>READ MORE</Link>
    <img src={blogImage} className={styles.image} />
  </div>
);

export default Banner;
