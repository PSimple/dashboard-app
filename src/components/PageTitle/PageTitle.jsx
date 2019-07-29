import React from 'react';
import Link from '../Link';
import styles from './PageTitle.css';

const linksData = [
  {
    title: 'Lint',
    href: '#',
  },
  {
    title: 'Dashboard',
    href: '#',
  },
  {
    title: 'Overview',
    href: '#',
  },
];

const PageTitle = () => (
  <section className={styles.title}>
    <header className={styles.container}>
      <div>
        <span className={styles.subtitle}>overview</span>
        <h1 className={styles.text}>Dashboard</h1>
      </div>
      <ul className={styles.breadcrumbs}>
        {linksData.map(item => (
          <li key={item.title} className={styles.item}>
            <Link href={item.href} type='breadcrumb'>{item.title}</Link>
          </li>
        ))}
      </ul>
    </header>
  </section>
);

export default PageTitle;
