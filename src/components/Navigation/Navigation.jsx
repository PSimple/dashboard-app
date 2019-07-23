import React from 'react';
import ContentWrapper from '../ContentWrapper';
import Link from '../Link';
import styles from './Navigation.css';

const linksData = [
  {
    href: '#',
    title: 'Dashboard',
  },
  {
    href: '#',
    title: 'Projects',
  },
  {
    href: '#',
    title: 'Invoices',
  },
  {
    href: '#',
    title: 'Documents',
  },
  {
    href: '#',
    title: 'Settings',
  },
];

const Navigation = () => (
  <nav className={styles.navigation}>
    <ContentWrapper leftJustify>
      {linksData.map(item => (
        <Link key={item.title} className="navigation" href={item.href}>
          {item.title}
        </Link>
      ))}
    </ContentWrapper>
  </nav>
);

export default Navigation;
