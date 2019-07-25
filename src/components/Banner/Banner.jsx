import React from 'react';
import styles from './Banner.css';

const blogImage = require('../../img/blog_image.svg');

const Banner = () => (
  <div className={styles.container}>
    <span className={styles.header}>FROM OUR BLOG</span>
    <span className={styles.title}>Urgent ! We Updated Our ToS</span>
    <span className={styles.text}>Hello, we just updated our tos ..</span>
    <span className={styles.link}>READ MORE</span>
    <img src={blogImage} className={styles.image} />
  </div>
);

export default Banner;
